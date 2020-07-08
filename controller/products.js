const Product = require('../models/product')

module.exports = {
  getProduct: (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      // hasProducts: products.length > 0,
    })
  },
  postProduct: (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/admin/add-product')
  },
  shop: (req, res, next) => {
    Product.fetchAll((cb) => {
      res.render('products', {
        prods: cb,
        pageTitle: 'list Product',
        hasProducts: cb.length > 0,
      })
    })    
  },
}
