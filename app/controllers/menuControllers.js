const express = require('express');
const router = express.Router();

router
    .get('/', function (request, response) {
        response.render('index');
    })
    .get('/about', function (request, response) {
        response.render('about');
    })
    .get('/blog-single', function (request, response) {
        response.render('blog-single');
    })
    .get('/cart', function (request, response) {
        response.render('cart');
    })
    .get('/blog', function (request, response) {
        response.render('blog');
    })
    .get('/checkout', function (request, response) {
        response.render('checkout');
    })
    .get('/contact', function (request, response) {
        response.render('contact');
    })
    .get('/product-single', function (request, response) {
        response.render('product-single');
    })
    .get('/shop', function (request, response) {
        response.render('shop');
    })
    .get('/wishlist', function (request, response) {
        response.render('wishlist');
    });

module.exports = router;
