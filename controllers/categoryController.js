let controller = {};
let models = require('../models')
let Category = models.Category;
let Sequelize = require('sequelize');
const category = require('../models/category');
let Op = Sequelize.Op;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagepath', 'summary'],
            include: [{
                model: models.Product,
                where: {}
            }]
        };
        if (query && query.search != '') {
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        Category
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getID = (name) => {
        Category.findOne({
            where: { name: name }})
            .then(result => {
            category = result.id;
            return category;
        })
    };


module.exports = controller;