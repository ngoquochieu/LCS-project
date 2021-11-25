const User = require('../../app/models/users');
const bcrypt = require('bcryptjs');
class ActionController {
    //[GET] '/action/login
    action(req, res, next) {
        res.render('login', {
            style: '/css/login.css',
            script: '/login.js',
        });
    }
    //[POST] '/action/login'
    async login(req, res, next) {
        const {userPhone, password, fullname, address, date_of_birth, img} = req.body;
        let user = await User.findOne({userPhone})
        if(!user) {
            return res.redirect('/action/login');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.redirect('/action/login');
        }
        res.cookie('user', user);
        req.session.isAuth = true;
        // const {cookies} = req;
        // console.log(req.cookies.user);
        res.redirect('/');
    }

    //[POST] /action/signup
    async signup(req, res, next) {
        const {userPhone, password} = req.body;
        let user = await User.findOne({userPhone});
        if(user){
            return res.redirect('/action/login');
        }
        const hashedPsw = await bcrypt.hash(password, 12);
        user = new User ({
            userPhone,
            password:hashedPsw,
            fullname:'Quoc Hieu',
            address: 'Blalala',
            date_of_birth:'04/06/2001',
            img:'/img/user/test.jpg',
            role:'user',
        })
        await user.save();
        res.redirect('/action/login');
    }

    //[POST] /action/logout
    logout(req, res, next) {
        res.clearCookie('user');
        req.session.destroy(err => {
            if(err) throw err;
            res.redirect('/');
        });

    }
}
module.exports = new ActionController();
