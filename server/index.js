import server from './server.js'

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('baddb live at', port)
})
