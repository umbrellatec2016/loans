'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('city', [{
      name: 'Bogota',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Madrid',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};