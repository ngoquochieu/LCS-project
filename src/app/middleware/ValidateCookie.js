module.exports = function (req, res, next) {
    const { cookies } = req;
    if ('user' in cookies) 
    res.redirect('/')
    else next();
};
