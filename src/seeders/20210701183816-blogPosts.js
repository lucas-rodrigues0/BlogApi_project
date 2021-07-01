'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('BlogPosts',
      [
        {
          id: 1,
          title: 'First post example',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          userId: 1,
          published: new Date('2021-07-01T19:58:00.000Z'),
          updated: new Date('2021-07-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Another example',
          content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          userId: 1,
          published: new Date('2021-07-01T19:58:00.000Z'),
          updated: new Date('2021-07-01T19:58:51.000Z'),
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  }
};
