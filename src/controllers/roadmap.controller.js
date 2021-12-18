const Roadmap = require("../models/roadmap/roadmap");
const logger = require("../logs/logger");

class RoadmapController {
    async addStation(ctx, next) {
        let line = ctx.request.body.line
        let name = ctx.request.body.name
        let time = ctx.request.body.time
        // TODO: 查重
        try {
            await new Roadmap({line: line, station: name, time: time})
                .save()
        } catch(err) {
            logger.error(err)
        }
    }

    async deleteStation(ctx, next) {
        let stations = ctx.request.body.stations
        try {
            for (const station of stations) {
                if (station.line && station.name && station.time) {
                    await Roadmap.deleteOne(station)
                }
            }
        } catch (err) {
            logger.error(err)
        }
    }
}

module.exports = new RoadmapController()
