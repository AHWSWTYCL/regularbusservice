let mongoose = require('../../db/mongodb')

let DriverSchema = mongoose.Schema(
    {
        line: String,
        name: String,
        job_number: String,
        telephone: String
    }
)

module.exports = mongoose.model('Driver', DriverSchema, 'driver')
