var db = require('../models');
const users = require('../models/users');
const Op = db.Sequelize.Op;
const Users = db.users
exports.FindUserByName=  async function(name){
    var output
    const condition =  name ? { name: { [Op.like]: `%${name}` } } : null
    await Users.findAll({where: condition, limit: 1,raw: true})
    .then(data=>{
       
        output=data
        
    })
    .catch(error=>{
        console.log(error)
        return err={err:"Invalid name data"}
    })
    //console.log(output)
     return output
}
exports.findAll=  async function(){
    var output
    //const condition =  name ? { name: { [Op.like]: `%${name}` } } : null
    await Users.findAll({
        raw: true})
    .then(data=>{
       
        output=data
        
    })
    .catch(error=>{
        console.log(error)
        return err={err:"Invalid name data"}
    })
    //console.log(output)
     return output
}
exports.Update=  async function(user){
    var output
   
    var serviceCountry = require('../service/country.js')
    let nat = await serviceCountry.FindCountryByName(user.nationality)
    user.nationality=nat[0].id
    console.log(nat)
    await Users.update(user, {where: { id: user.id },
        raw: true})
    .then(num=>{
       
        output=num
        
    })
    .catch(error=>{
        console.log(error)
        return err={err:"Invalid name data"}
    })
    //console.log(output)
     return output
}