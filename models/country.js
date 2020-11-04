module.exports = function (sequelize,Sequelize){
    return sequelize.define('country',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: Sequelize.STRING,
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
          
          
        },{
          freezeTableName: true,
        }
      )
      
    
}