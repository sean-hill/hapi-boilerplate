const HapiSwagger = require('hapi-swagger')

module.exports = {
  register: HapiSwagger,
  options: {
    info: {
      title: 'API Docs',
      version: '1.0.0'
    }
  }
}
