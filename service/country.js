var db = require('../models');
const country = require('../models/country');
const Op = db.Sequelize.Op;
const Country = db.country
exports.FindCountryByName=  async function(nationality){
    var output
    const condition =  nationality ? { name: { [Op.like]: `%${nationality}` } } : null
    await Country.findAll({where: condition, limit: 1,raw: true})
    .then(data=>{
       
        output=data
        
    })
    .catch(error=>{
        console.log(error)
        return err={err:"Invalid country data"}
    })
    //console.log(output)
     return output
}
