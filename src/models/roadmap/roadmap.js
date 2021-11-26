let mongoose = require('../../db/mongodb')

var RoadmapSchema = mongoose.Schema({
    line: String,
    station: String,
    time: String
})

module.exports = mongoose.model('Roadmap', RoadmapSchema, 'roadmap')
