const Roadmap = require("../models/roadmap/roadmap");
const logger = require("../logs/logger");
const User = require("../models/user/user");

class RoadmapService {
    async getRoadmap() {
        let res = null
        try {
            res = await Roadmap.find({})
        } catch (err) {
            logger.error(err)
        }

        return res
    }

    async updateRoadmap({name, line, station, time}) {
        try {
            let res = await User.updateOne({name: name}, {$set: {line: line, station: station, time: time}})
            logger.info('更新' + name + '数据成功！')
        } catch (err) {
            logger.error('更新' + name + '数据失败：' + err)
            return false
        }

        return true
    }
}

module.exports = new RoadmapService()
