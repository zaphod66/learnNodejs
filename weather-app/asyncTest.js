const request = require('request')

console.log('Starting')

setTimeout(() => {
    setTimeout(() => { console.log('1.2 timer') }, 500)
    console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
    setTimeout(() => { console.log('1.1 timer') }, 500)
    console.log('0 Second Timer')
}, 0)


console.log('Stopping')

// Weatherstack.com API key: 8bd52b3d7950df6f1ce1ddbd415f9da9
// http://api.weatherstack.com/current?access_key=8bd52b3d7950df6f1ce1ddbd415f9da9&query=54,10
