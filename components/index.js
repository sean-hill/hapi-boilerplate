const User = require('./user')

exports.register = server => {
  User.register(server)
}
