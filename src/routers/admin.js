const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require('path');
const adminController = require('../app/controllers/AdminController');
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  path.join (__dirname, "../public/img/uploads"));
        // cb(null)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '---' + file.originalname);
    },
});
const upload = multer({ storage:fileStorageEngine });

/* Authentication */
router.get('/', adminController.loginPage);
router.post('/login', adminController.login);
/* Authentication */

/* Dashboard */
router.get('/dashboard', adminController.dashboard);
/* Dashboard */

/* Products */
router.get('/products', adminController.getItems);
router.get('/products/edit/:id', adminController.editItem);
router.delete('/products/delete/:id', adminController.deleteItem);
/* Products */

/* Users */
router.get('/users',adminController.getUser);
router.get('/users/add', adminController.getAddUser)
router.post('/users/add',upload.single('avatar'), adminController.addUser);
router.get('/users/edit/:id', adminController.editUser);
router.put('/users/:id', upload.single('avatar'), adminController.updateUser);
router.delete('/users/delete/:id', adminController.deleteUser);
/* Users */

module.exports = router;