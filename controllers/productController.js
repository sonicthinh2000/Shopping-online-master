let controller = {};
let models = require('../models')
let Product = models.Product;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getTrendingProducts = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                order: [
                    ['overallReview', 'DESC']
                ],
                limit: 8,
                include: [{ model: models.Category }, { model: models.Brand }],
                attributes: ['id', 'name', 'imagepath', 'price']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.Category },
                { model: models.Brand }
            ],
            attributes: ['id', 'name', 'imagepath', 'price', 'categoryId'],
            where: {
                price: {
                    [Op.gte]: query.min,
                    [Op.lte]: query.max
                }
            }
        };
        if (query.category > 0) {
            options.where.categoryId = query.category;
        }
        if (query.search != '') {
            options.where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.brand > 0) {
            options.where.brandId = query.brand;
        }
        if (query.color > 0) {
            options.include.push({
                model: models.ProductColor,
                attributes: [],
                where: { colorId: query.color }
            });
        }
        if (query.limit > 0) {
            options.limit = query.limit;
            options.offset = query.limit * (query.page - 1);
        }
        if (query.sort) {
            switch (query.sort) {
                case 'name':
                    options.order = [
                        ['name', 'ASC']
                    ];
                    break;
                case 'price':
                    options.order = [
                        ['price', 'ASC']
                    ];
                    break;
                case 'overallReview':
                    options.order = [
                        ['overallReview', 'DESC']
                    ];
                    break;
                default:
                    options.order = [
                        ['name', 'ASC']
                    ];
            }
        }
        Product
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let product;
        Product
            .findOne({
                where: { id: id },
                include: [{ model: models.Category }],
            })
            .then(result => {
                product = result;
                return models.Comment.findAll({
                    where: { productId: id, parentCommentId: null },
                    include: [
                        { model: models.User },
                        {
                            model: models.Comment,
                            as: 'SubComments',
                            include: [{ model: models.User }]
                        }
                    ]
                });
            })
            .then(comments => {
                product.Comments = comments;
                return models.Review.findAll({
                    where: { productId: id },
                    include: [{ model: models.User }]
                });
            })
            .then(reviews => {
                product.Reviews = reviews;

                let stars = [];
                for (let i = 1; i <= 5; i++) {
                    stars.push(reviews.filter(item => (item.rating == i)).length);
                }
                product.stars = stars;
                resolve(product);
            })
            .catch(error => reject(new Error(error)));
    });
};

controller.getByName = (name) => {
    return Product.findOne({
        where: { name: name }
    });
};

controller.createProduct = (product) => {

    return Product.create(product);
};


controller.getProductsGreaterThan40 = async (req, res) => {
    try {
      const products = await Product.findAll({
        where: {
          id: { [Op.gt]: 40 } // Use Op.gt to query products with id greater than 40
        }
      });
    
    } catch (error) {
      console.log(error);
      res.render('error');
    }
  };

  controller.displayProducts = async (req, res) => {
    try {
      const products = await Product.findAll({
        where: {
          id: { [Op.gt]: 40 }
        }
      });
      res.render('mystore', { products });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

module.exports = controller;