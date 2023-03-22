'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Quang',
      lastName: 'Linh',
      address: 'Viet Nam',
      phonenumber: '0869830923',
      gender: '1',
      roleId: 'ROLE',
      image: 'R1',
      positionId: 'k',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
