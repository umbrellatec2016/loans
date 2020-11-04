'use strict';
module.exports = {
    up: async function(queryInterface, Sequelize) {
      // logic for transforming into the new state
      await queryInterface.createTable(
        'country',
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
          
          
        },
        {
          engine: 'InnoDB',                     // default: 'InnoDB'
          charset: 'latin1',                    // default: null
          //schema: 'public'                      // default: public, PostgreSQL only.
        }
      )
      
    },
   
    down: function(queryInterface, Sequelize) {
      // logic for reverting the changes
      queryInterface.dropTable('country')
    }
  }