const path    = require('path')
const express = require('express')
const hbs     = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDir   = path.join(__dirname, '../public')
const viewsDir    = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

// Setup static dir to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'This may help you.'
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Help article not found!',
        url: req.url
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Page not found!',
        url: req.url
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
