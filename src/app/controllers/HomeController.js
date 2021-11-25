const Items = require('../models/items');
const Users = require('../models/users');
const Cates = require('../models/categories');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class HomeController {
    index(req, res, next) {
        // req.session.isAuth = true;
        Items.find()
            .then((items) => {
                res.render('home', {
                    title: 'Home page',
                    style: '/css/home.css',
                    script: 'home.js',
                    nav: '/css/nav.css',
                    header_css:'/css/header.css',
                    header_js:'/header.js',
                    user: req.cookies.user,
                    items: multipleMongooseToObject(items),
                });
            })
            .catch(next);
    }
}

module.exports = new HomeController();
