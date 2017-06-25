const Service = require('./service')

exports.hello = (request, reply) => {
  Service.hello().then(response => reply(response)).catch(boom => reply(boom))
}

exports.world = (request, reply) => {
  Service.world().then(response => reply(response)).catch(boom => reply(boom))
}

exports.boom = (request, reply) => {
  Service.boom().then(response => reply(response)).catch(boom => reply(boom))
}

exports.echo = (request, reply) => {
  Service.echo(request.payload.echo)
    .then(response => reply(response))
    .catch(boom => reply(boom))
}
