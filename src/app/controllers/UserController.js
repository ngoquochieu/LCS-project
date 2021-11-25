class UserController {
    profile(req, res, next) {
        res.json({
            user:req.cookies.user,
        })
    }
}
module.exports = new UserController();