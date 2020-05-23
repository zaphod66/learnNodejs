const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=8bd52b3d7950df6f1ce1ddbd415f9da9&query=53.99444,10.7825&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error: ', error)
})

request.end()
