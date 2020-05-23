const path    = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

app.get('/weather', (req, res) => {
    res.send({
        name: 'Schenefeld',
        desc: 'partly cloudy',
        temp: 12,
        feelslike: 12
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
