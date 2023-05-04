'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                message: 'So good',
                userId: 1,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Nice phone',
                userId: 2,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'good item',
                userId: 5,
                productId: 35,
                parentCommentId: null
            },
            {
                message: 'quite expensive',
                userId: 3,
                productId: 2,
                parentCommentId: null
            },
            {
                message: 'nice product',
                userId: 3,
                productId: 3,
                parentCommentId: null
            },
            {
                message: 'good item',
                userId: 2,
                productId: 3,
                parentCommentId: null
            },
            {
                message: 'have to try this',
                userId: 1,
                productId: 4,
                parentCommentId: null
            },
            {
                message: 'good item',
                userId: 2,
                productId: 20,
                parentCommentId: null
            },
            {
                message: 'nice product',
                userId: 3,
                productId: 8,
                parentCommentId: null
            },
            {
                message: 'maybe cheaper',
                userId: 4,
                productId: 8,
                parentCommentId: null
            },
            {
                message: 'good item',
                userId: 5,
                productId: 9,
                parentCommentId: null
            },
            {
                message: 'i will buy this',
                userId: 4,
                productId: 14,
                parentCommentId: null
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Comments', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});

    }
};