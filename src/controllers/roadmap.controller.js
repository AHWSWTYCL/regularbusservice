const Roadmap = require("../models/roadmap/roadmap");
const logger = require("../logs/logger");

class RoadmapController {
    addStation(req, res) {
        let line = req.body.line
        let name = req.body.name
        let time = req.body.time
        // TODO: 查重
        new Roadmap({line: line, station: name, time: time})
            .save(function (err, ret) {
                if (err) {
                    logger.error(err)
                }
            })
    }

    deleteStation(req, res) {
        let stations = req.body.stations
        for (const station of stations) {
            Roadmap.deleteOne(station,
                function (err, ret) {
                    if (err) {
                        logger.error(err)
                    }
                })
        }
    }
}

module.exports = new RoadmapController()
