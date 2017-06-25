const Handlers = require('./handlers')
const Joi = require('joi')

exports.register = server => {
  server.route({
    method: 'GET',
    path: '/user/hello',
    handler: Handlers.hello,
    config: {
      tags: ['api']
    }
  })

  server.route({
    method: 'GET',
    path: '/user/world',
    handler: Handlers.world,
    config: {
      tags: ['api']
    }
  })

  server.route({
    method: 'GET',
    path: '/user/boom',
    handler: Handlers.boom,
    config: {
      tags: ['api']
    }
  })

  server.route({
    method: 'POST',
    path: '/user/echo',
    handler: Handlers.echo,
    config: {
      tags: ['api'],
      validate: {
        payload: {
          echo: Joi.string().required()
        }
      }
    }
  })
}
