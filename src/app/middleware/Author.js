module.exports = function(req, res, next) {
    if(req.session.isAuth) {
        next();
    }else {
        // res.redirect('/action/login');
        res.redirect(req.originalUrl);
    }
}