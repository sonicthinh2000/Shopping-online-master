'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Electronic Devices", imagepath: '../img/categories/1.jpg' },
            { name: "Health & Beauty", imagepath: '../img/categories/9.jpg' },
            { name: "Babies & Toys", imagepath: '../img/categories/16.jpg' },
            { name: "Groceries & Pets", imagepath: '../img/categories/22.jpg' },
            { name: "Home & Lifestyle", imagepath: '../img/categories/29.jpg' },
            { name: "Fashion & Fitment", imagepath: '../img/categories/35.jpg' },
            { name: "Sports & Travel", imagepath: '../img/categories/42.jpg' }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Categories', data, {});
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