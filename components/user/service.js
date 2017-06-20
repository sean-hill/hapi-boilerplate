const Boom = require('boom')

exports.hello = () => {
  return Promise.resolve('Hello!')
}

exports.world = () => {
  return Promise.resolve('World!')
}

exports.boom = () => {
  return Promise.reject(Boom.badRequest('Boom!'))
}
