'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "q", imagepath: 'img/home/item1.jpg' },
            { name: "w", imagepath: 'img/home/item2.jpg' },
            { name: "e", imagepath: 'img/home/item3.jpg' },
            { name: "r", imagepath: 'img/home/item1.jpg' },
            { name: "a", imagepath: 'img/home/item1.jpg' },
            { name: "c", imagepath: 'img/home/item1.jpg' },
            { name: "d", imagepath: 'img/home/item1.jpg' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Brands', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};