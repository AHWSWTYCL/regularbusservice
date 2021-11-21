const {exec} = require("../../db/mysql");

const getRoadmap = () => {
    const sql = `select * from roadmap`;
    return exec(sql).then(rows => {
        return rows
    })
}

module.exports = {
    getRoadmap
}
