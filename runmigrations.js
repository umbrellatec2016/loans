const db = require('./database.js')


var migrator = db.sequelize.getMigrator({path: process.cwd() + "/migrations" }, true)
migrator.migrate().success(function(){
  console.log("migrations complete");
}).error(function(err){
  console.log("error migrating DB: ");
  throw err;
  process.exit();
});