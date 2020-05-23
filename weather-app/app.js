const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const location = process.argv[2]

if (!location) {
    return console.log('No location given!')
}

geocode(location, (err, { name, lat, lon }) => {
    if (err) {
        return console.log('geocode error: ' + err)
    } 
    
    console.log('Lat/Lon for ' + name + ' is ' + lat + ', ' + lon)

    weather(lat, lon, (err, { name, desc, temp, feelslike}) => {
        if (err) {
            return console.log('Error: ' + err)
        }
        
        console.log('Weather for ' + name + ' is ' + desc + '. Temperature is ' + temp + '°C and feels like ' + feelslike + '°C.')
    })
    
})
