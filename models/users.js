module.exports = function (sequelize,Sequelize){
    return sequelize.define('users',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        name: Sequelize.STRING,
        second_name: Sequelize.STRING,
        surname: Sequelize.STRING,
        
        //foreign key usage
        nationality: {
            type: Sequelize.INTEGER,
            references: {
                model: 'country',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        id_number: Sequelize.STRING,
        phone: Sequelize.STRING,
        address: Sequelize.STRING,
        city: {
          type: Sequelize.INTEGER,
          references: {
              model: 'city',
              key: 'id'
          }
        },
        type: Sequelize.ENUM('customer','analyst'),

      })
}