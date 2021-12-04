let mongoose = require('../../db/mongodb')

const UserSchema = mongoose.Schema({
    name: String,
    password: String,
    line: String,
    station: String,
    time: String
}, {versionKey: false});

module.exports = mongoose.model('User', UserSchema, 'user')
