const User = require("../models/user/user");

class LoginController {
    login(req, res) {
        let name = req.body.name;
        let password = req.body.password

        User.find({name: name, password}, (err, doc) => {
            let result = {};
            if (err || doc.length === 0) {
                result.code = -1
                res.json(result)
            } else {
                result.code = 1
                res.json(result)
            }
        })
    }
}

module.exports = new LoginController()
