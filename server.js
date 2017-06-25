const Hapi = require('hapi')
const Components = require('./components')
const Plugins = require('./plugins')
const server = new Hapi.Server()

server.connection({ port: 4000, host: 'localhost' })

Components.register(server)

Plugins.register(server).then(() => {
  server.start(err => {
    if (err) {
      throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
  })
})

module.exports = server
