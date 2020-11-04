'use strict';

const controller = require('./controller.js');

module.exports = function (app) {
    app.route('/users')
        .get(controller.users)
    app.route('/createUser')
        .put(controller.createUser)
    app.route('/updateUsers')
        .post(controller.updateUser)
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
};