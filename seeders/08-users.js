'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { username: "test1@shopping.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Tester 1", avatarPath: '../img/user/ava1.jpg', isAdmin: false },
            { username: "test2@shopping.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Tester 2", avatarPath: '../img/user/ava2.jpg', isAdmin: false },
            { username: "test3@shopping.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Tester 3", avatarPath: '../img/user/ava3.jpg', isAdmin: false },
            { username: "test4@shopping.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Tester 4", avatarPath: '../img/user/ava4.jpg', isAdmin: false },
            { username: "test5@shopping.com", password: "123456", fullname: "Tester 5", avatarPath: '../img/user/ava5.jpg', isAdmin: false }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Users', data, {});
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