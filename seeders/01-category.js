'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Electronic Devices", imagepath: '../img/categories/item3.jpg' },
            { name: "Health & Beauty", imagepath: '../img/categories/item1.jpg' },
            { name: "Babies & Toys", imagepath: '../img/categories/item2.jpg' },
            { name: "Groceries & Pets", imagepath: '../img/categories/dress.jpg' },
            { name: "Home & Lifestyle", imagepath: '../img/categories/trouser.jpg' },
            { name: "Fashion & Accessories", imagepath: '../img/categories/shoes.jpg' },
            { name: "Sports & Travel", imagepath: '../img/categories/bag.jpg' }
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