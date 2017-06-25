const Inert = require('inert')
const Vision = require('vision')
const Swagger = require('./swagger')

exports.register = server => {
  return new Promise((resolve, reject) => {
    server.register(
      [Inert, Vision, Swagger],
      err => (err ? reject(err) : resolve())
    )
  })
}
