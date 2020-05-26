const path    = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

const publicDir = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Norbert Scheller'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Norbert Scheller'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'This may help you.',
        name: 'Norbert Scheller'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        name: 'Schenefeld',
        desc: 'partly cloudy',
        temp: 12,
        feelslike: 12
    })
})

app.get('/about', )
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
