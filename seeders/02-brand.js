'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Mobiles", imagepath: 'img/home/item1.jpg' },
            { name: "Tablets", imagepath: 'img/home/item2.jpg' },
            { name: "Laptops", imagepath: 'img/home/item3.jpg' },
            { name: "Desktops Computers", imagepath: 'img/home/item1.jpg' },
            { name: "Audio", imagepath: 'img/home/item1.jpg' },
            { name: "Cameras & Video", imagepath: 'img/home/item1.jpg' },
            { name: "Monitors", imagepath: 'img/home/item1.jpg' },
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