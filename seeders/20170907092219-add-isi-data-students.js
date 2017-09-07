'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Students',[{
      first_name : 'Prana',
      last_name : 'Jaya',
      email : 'pranajaya@sekolah.id',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      first_name : 'Daniel',
      last_name : 'Pangkey',
      email : 'danielpangkey@sekolah.id',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      first_name : 'Hary',
      last_name : 'Nugraha',
      email : 'harynugrahaputra@sekolah.id',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      first_name : 'Jo',
      last_name : 'Nathan',
      email : 'jonathan@sekolah.id',
      createdAt : new Date(),
      updatedAt : new Date()
    }]
  )

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
