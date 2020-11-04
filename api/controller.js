'use strict';

var properties = require('../package.json')
const amqp = require('amqplib');
var db = require('../models')
const Users = db.users
const { v4: uuidv4 } = require('uuid');

const messageQueueConnectionString = process.env.AMQP_URL;

var controllers = {
    users: async function (req, res) {

        var serviceUsers = require('../service/users.js')
        let users = await serviceUsers.findAll()
        res.json(users);
    },
    updateUser: async function (req, res) {

        var serviceUsers = require('../service/users.js')
        const user = {
            name: req.body.name,
            second_name: req.body.secondName,
            surname: req.body.surname,
            nationality: req.body.nationality,
            id: req.body.id

        }
        let users = await serviceUsers.Update(req.body)
        res.json(users);
    },
    createUser: async function (req, res) {

        let connection = await amqp.connect(messageQueueConnectionString);
        let channel = await connection.createConfirmChannel();

        if (typeof req.body.name !== "undefined") {
            let nationality = req.body.nationality
            var serviceCountry = require('../service/country.js')
            let nat = await serviceCountry.FindCountryByName(nationality)


            const user = {
                name: req.body.name,
                second_name: req.body.secondName,
                surname: req.body.surname,
                nationality: nat[0].id

            }
            let rqID = uuidv4()
            let userText = JSON.stringify(user)
            var ok = channel.assertQueue("newUser", { durable: true });
            ok.then(function (_qok) {
                // NB: `sentToQueue` and `publish` both return a boolean
                // indicating whether it's OK to send again straight away, or
                // (when `false`) that you should wait for the event `'drain'`
                // to fire before writing again. We're just doing the one write,
                // so we'll ignore it.
                channel.sendToQueue("newUser", Buffer.from(userText));
                console.log(" [x] Sent '%s'", "user");
            })

            let userId = 0
            let usrid = Users.create(user)
                .then(function (user) {

                    let rs = {
                        message: "User Created ",
                        id: user.id
                    }
                    res.json(rs);
                })
            return

        } else {
            var error = {
                Description: "Check user data"
            }
            res.json(error)
        }
    }
    ,
    getDistance: function (req, res) {
        //    distance.find(req, res, function(err, dist) {
        //        if (err)
        //            res.send(err);
        //        res.json(dist);
        //    });
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
};

module.exports = controllers;