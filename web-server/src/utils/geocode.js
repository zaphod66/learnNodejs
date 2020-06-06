const request = require('request')

const geocode = (location, cb) => {
    const mbURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(location) + '.json?access_token=pk.eyJ1IjoiemFwaG9kNjYiLCJhIjoiY2thYTZ3dXZzMHR3OTMwbWtjdHlzOXg3YiJ9.RfSJCyrj9HsnHZFQVvpyLQ&limit=1'

    request({ url: mbURL, json: true }, (error, { body }) => {
        if (error) {
            cb('Unable to connect to MapBox!', undefined)
        } else if (body.features.length === 0) {
            cb('No location found for search term: ' + body.query + '.', undefined)
        } else {
            const center    = body.features[0].center
            const text      = body.features[0].text
        
            const data = { name: text, lat: center[1], lon: center[0] }

            cb(undefined, data)        
        }
    })
}

module.exports = geocode
