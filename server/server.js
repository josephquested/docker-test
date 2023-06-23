import express from 'express'

const server = express()

server.use(express.urlencoded({ extended: false }))

server.get('*', (req, res) => {
    res.send("joseph slaps 900")
})

export default server
