'use strict';
module.exports = {
    up: async function(queryInterface, Sequelize) {
      // logic for transforming into the new state
      await queryInterface.createTable(
        'users',
        {
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

        },
        {
          engine: 'InnoDB',                     // default: 'InnoDB'
         // charset: 'latin1',                    // default: null
         //schema: 'public'                      // default: public, PostgreSQL only.
        }
      )
      
    },
   
    down: function(queryInterface, Sequelize) {
      // logic for reverting the changes
      queryInterface.dropTable('users')
    }
  }