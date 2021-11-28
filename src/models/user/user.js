let mongoose = require('../../db/mongodb')

var RoadmapSchema = mongoose.Schema({
    name: String,
    password: String,
    line: String,
    station: String,
    time: String
}, {versionKey: false})

module.exports = mongoose.model('User', RoadmapSchema, 'user')
