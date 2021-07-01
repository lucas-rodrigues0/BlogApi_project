'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        displayName: ' Marcus Tullius Cicero',
        email: 'latin@mail.com',
        password: '123456',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gipsmodelle_Wiener_Historismus_Hofburg-Keller_2015_Cicero_Karl_Sterrer.jpg/330px-Gipsmodelle_Wiener_Historismus_Hofburg-Keller_2015_Cicero_Karl_Sterrer.jpg',
      },
      {
        id: 2,
        displayName: 'Homero',
        email: 'greece@mail.com',
        password: '123456',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Homer_British_Museum.jpg/300px-Homer_British_Museum.jpg',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
