'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', [{
        name: 'Plan',
      }, {
        name: 'Do',
      }, {
        name: 'Actual',
      }, {
        name: 'Done',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Categories', null, {});
  }
};
