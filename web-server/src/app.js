const path    = require('path')
const express = require('express')
const hbs     = require('hbs')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

<<<<<<< HEAD
=======
// provided by heroku
const port = process.env.PORT || 3000

>>>>>>> webServer
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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    const address = req.query.address

    geocode(address, (error, { name, lat, lon } = {} ) => {
        if (error) {
            return res.send({ error })
        }
        
        weather(lat, lon, (error, data) => {
            if (error) {
                return res.send({ error })
            }
            
            res.send({
                data,
                addr: address,
                name
            })
        })
        
    })
})

app.get('/products', (req, res) => {
    console.log(req.query.search)
    res.send({
        products: []
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

<<<<<<< HEAD
app.listen(3000, () => {
    console.log('Server is up on port 3000')
=======
app.listen(port, () => {
    console.log('Server is up on port' + port)
>>>>>>> webServer
})
