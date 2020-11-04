'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('country', [{
      name: 'España',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Colombia',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};