const Handlers = require('./handlers')

exports.register = server => {
  server.route({
    method: 'GET',
    path: '/user/hello',
    handler: Handlers.hello
  })

  server.route({
    method: 'GET',
    path: '/user/world',
    handler: Handlers.world
  })

  server.route({
    method: 'GET',
    path: '/user/boom',
    handler: Handlers.boom
  })
}
