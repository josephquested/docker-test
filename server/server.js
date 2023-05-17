const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')


server.get('/', (req, res) => {
    res.send('joseph rocks 420')
})

module.exports = server
