const request = require('request')

const weather = (lat, lon, cb) => {
    const wsURL = 'http://api.weatherstack.com/current?access_key=8bd52b3d7950df6f1ce1ddbd415f9da9&query='+lat+','+lon+'&units=m'

    request({ url: wsURL, json: true }, (error, { body }) => {
        if (error) {
            cb('Unable to connect to WeatherStack!', undefined)
        } else if (body.error) {
            const info = body.error.info
            cb('Invalid query to WeaterStack: ' + info, undefined)
        } else {
            const desc      = body.current.weather_descriptions[0]
            const name      = body.location.name
            const temp      = body.current.temperature
            const feelslike = body.current.feelslike

            const data = { name, desc, temp, feelslike }

            cb(undefined, data)
        }
    })
}

module.exports = weather
