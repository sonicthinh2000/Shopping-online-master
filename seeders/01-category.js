'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Electronic Devices", imagepath: '../img/categories/item3.jpg' },
            { name: "a", imagepath: '../img/categories/item1.jpg' },
            { name: "Jb", imagepath: '../img/categories/item2.jpg' },
            { name: "c", imagepath: '../img/categories/dress.jpg' },
            { name: "d", imagepath: '../img/categories/trouser.jpg' },
            { name: "Se", imagepath: '../img/categories/shoes.jpg' },
            { name: "f", imagepath: '../img/categories/bag.jpg' }
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