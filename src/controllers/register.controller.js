const User = require("../models/user/user");

class RegisterController {
    register(req, res) {
        let name = req.body.name
        let password = req.body.password

        let result;

        User.find({name: name, password}, (err, doc) => {
            let result = {};
            if (err || doc.length === 0) {

                new User({name: name, password: password})
                    .save(function (err, ret) {
                        if (err) {
                            result.code = -1;
                            res.json(result)
                        } else {
                            result.code = 1
                            res.json(result)
                        }
                    })
            } else {
                result.code = 1
                res.json(result)
            }
        })
    }
}

module.exports = new RegisterController()