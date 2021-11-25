const Users = require('../models/users');
const Items = require('../models/items');
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const fs = require('fs');
class AdminController {
    /* ----------------------- Dashboard ------------------- */
    //[GET] /admin/dashboard
    dashboard(req, res, next) {
        res.render('db', {
            layout:'manager',
            admin : req.cookies.admin,
        })
    }
    /* ----------------------- Dashboard ------------------- */
    /* ----------------------- Authentication ------------------- */
    //[GET] /admin/
    async loginPage(req, res, next) {
        res.render('db_login', {
            style: '/css/admin/login.css',
            script: 'admin/login.js',
        });
    }
    //[POST] /admin/login
    async login(req, res, next) {
        try {
            const {username, password} = req.body;
            let admin = await Admin.findOne({username});
            if(!admin) {
                return res.redirect('/admin');
            }
            const isMatch = (password === admin.password);
            if(!isMatch) {
                return res.redirect('/admin');
            }
            res.cookie('admin', admin);
            req.session.isAuth = true;
            res.redirect('/admin/dashboard');
        } catch(err) {
            res.send(err);
        }
    }
    /* ----------------------- Authentication ------------------- */

     /* ----------------------- Users ------------------- */
    //[GET] /admin/users
    async getUser(req, res, next) {
        try {
            let users = await Users.find();          
            res.render('db_content', {
                layout:'manager',
                users:multipleMongooseToObject(users),
                admin : req.cookies.admin,
            });
        }catch(err) {
            console.log(err);
        }
    }
    //[GET] admin/users/add
    getAddUser(req, res, next) {
        res.render('db_add_users', {
            layout:'manager', 
            admin : req.cookies.admin,
            style:'/css/admin/add_users.css',
        })
    }
    //[POST] admin/users/add
    async addUser(req, res, next) {
        try {
            const {fullname, userPhone, password, address, date_of_birth, role} = req.body;
            const hashedPsw = await bcrypt.hash(password, 12);
            let user = await Users.findOne({userPhone});
            if(user) {return res.redirect('/admin/users/add')};
            if(req.hasOwnProperty('file')) { 
                const fileName = req.file.path; 
                const newFileName = '/' + fileName.split('\\').splice(5).join('/');
                user = new Users({fullname, userPhone, password:hashedPsw, address, date_of_birth, role, img:newFileName});
                await user.save();
                res.redirect('/admin/users');
            } else {
                const {fullname, userPhone, password, address, date_of_birth, role} = req.body; 
                user = new Users({fullname, userPhone, password, address, date_of_birth, role});
                await user.save();
                res.redirect('/admin/users'); 
            }
            
        } catch (error) {
            console.log(error);
            next();
        }  
    }
    //[GET] admin/users/edit/:id
    async editUser (req, res, next) {
        try {
            let user = await Users.findById({_id: req.params.id});
            res.render('db_edit', {
                layout:'manager',
                user: mongooseToObject(user),
                style:'/css/admin/edit_user.css',
                admin : req.cookies.admin,
            })
        } catch(err) {
            console.log(err);
        }
    }
    //[DELETE] /users/delete/:id
    async deleteUser(req, res, next) {
        try {
            const isDeleted = await Users.deleteOne({_id: req.params.id});
            if(isDeleted)
                res.redirect(`/admin/users`);
        } catch(err) {
            console.error(err);
        }
    }
    //[PUT] admin/user/:id
    async updateUser(req, res, next) {
        try {
            if(req.hasOwnProperty('file')) {
                const {fullname, userPhone, address, date_of_birth, role} = req.body;
                const fileName = req.file.path;
                const newFileName = '/' + fileName.split('\\').splice(5).join('/');
                const isUpdate = await Users.findByIdAndUpdate(req.params.id, {fullname, userPhone, address, date_of_birth, role, img:newFileName});
                isUpdate && res.redirect('/admin/users');
            } else {
                const {fullname, userPhone, address, date_of_birth, role} = req.body;
                const isUpdate = await Users.findByIdAndUpdate(req.params.id, {fullname, userPhone, address, date_of_birth, role});
                isUpdate && res.redirect('/admin/users');  
            } 
        } catch (error) {
            console.log(error);
            next();
        }  
    }
    /* ----------------------- Users ------------------- */

    /* -------------------- Items ---------------- */
    //[GET] admin/products
    async getItems(req, res, next) {
        try {
            let items = await Items.find() || [];
            // res.send(items);
            res.render('db_content', {
                layout:'manager',
                items : multipleMongooseToObject(items),
                admin : req.cookies.admin,
            })
        } catch(err) {
            console.log(err);
        }
    }
    //[GET] /admin/products/edit/:id
    async editItem(req, res, next) {
        try {
            const item = await Items.findOne({'details.product_code':req.params.id});
            if(item) res.send(item);
            res.send({
                message: 'Not pound Item',
            })
        } catch (error) {
            console.log(error);
        }
    }
    //[DELETE] admin/products/delete/:id
    async deleteItem(req, res, next) {
        try {
            // const item = await Items.deleteOne({_id:req.params.id});
            if(true)
                // res.redirect('/admin/products')
                res.send('success');
        } catch (error) {
            console.log(error);
        }
    }
    
}
module.exports = new AdminController();