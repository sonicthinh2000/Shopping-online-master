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

            { name: "Skincare", imagepath: 'img/home/item1.jpg' },
            { name: "Make-Up", imagepath: 'img/home/item2.jpg' },
            { name: "Beauty Tools", imagepath: 'img/home/item3.jpg' },
            { name: "Bath & Body", imagepath: 'img/home/item1.jpg' },
            { name: "Deodorants", imagepath: 'img/home/item1.jpg' },
            { name: "Fragrances", imagepath: 'img/home/item1.jpg' },

            { name: "Diapering & Potty", imagepath: 'img/home/item1.jpg' },
            { name: "Milk Formula & Baby Food", imagepath: 'img/home/item2.jpg' },
            { name: "Baby Fashion & Accessories", imagepath: 'img/home/item3.jpg' },
            { name: "Learning & Education", imagepath: 'img/home/item1.jpg' },
            { name: "Baby Personal Care", imagepath: 'img/home/item1.jpg' },
            { name: "Toys & Games", imagepath: 'img/home/item1.jpg' },

            { name: "Beverages & Chilled", imagepath: 'img/home/item1.jpg' },
            { name: "Canned & Dried Goods", imagepath: 'img/home/item2.jpg' },
            { name: "Cleaning & Kitchen Supplies", imagepath: 'img/home/item3.jpg' },
            { name: "Laundry Supplies", imagepath: 'img/home/item1.jpg' },
            { name: "Pet Accessories", imagepath: 'img/home/item1.jpg' },
            { name: "Pet Food & pet healthcare", imagepath: 'img/home/item1.jpg' },
            { name: "Fruit & Vegetables", imagepath: 'img/home/item1.jpg' },

            { name: "Kitchen & Dining", imagepath: 'img/home/item1.jpg' },
            { name: "Tools & Outdoor", imagepath: 'img/home/item2.jpg' },
            { name: "Bedding & Bath", imagepath: 'img/home/item3.jpg' },
            { name: "Home Décor & Furniture", imagepath: 'img/home/item1.jpg' },
            { name: "Stationery & Craft", imagepath: 'img/home/item1.jpg' },
            { name: "Media, Music & Books", imagepath: 'img/home/item1.jpg' },
            { name: "Laundry & Cleaning", imagepath: 'img/home/item1.jpg' },

            { name: "Women's Clothing", imagepath: 'img/home/item1.jpg' },
            { name: "Men's Clothing", imagepath: 'img/home/item2.jpg' },
            { name: "Jackets & Shirts", imagepath: 'img/home/item3.jpg' },
            { name: "Sweaters & Cardigans", imagepath: 'img/home/item1.jpg' },
            { name: "Skirts & Dresses", imagepath: 'img/home/item1.jpg' },
            { name: "Shoes", imagepath: 'img/home/item1.jpg' },
            { name: "Jeans & Shorts", imagepath: 'img/home/item1.jpg' },

            { name: "Men's Sports Shoes & Apparel", imagepath: 'img/home/item1.jpg' },
            { name: "Women's Sports Shoes & Apparel", imagepath: 'img/home/item2.jpg' },
            { name: "Travel & Outdoor Recreation", imagepath: 'img/home/item3.jpg' },
            { name: "Exercise & Fitness", imagepath: 'img/home/item1.jpg' },
            { name: "Boxing & Martial Arts", imagepath: 'img/home/item1.jpg' },
            { name: "Water Sports", imagepath: 'img/home/item1.jpg' },
            { name: "Sports Accessories", imagepath: 'img/home/item1.jpg' },
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