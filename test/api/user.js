const Code = require('code')
const expect = Code.expect
const Lab = require('lab')
const lab = (exports.lab = Lab.script())

const describe = lab.describe
const it = lab.it
const after = lab.after

const Server = require('../../server')

describe('api tests - users', () => {
  it('should say Hello!', () =>
    Server.inject({
      method: 'GET',
      url: '/user/hello'
    }).then(response => {
      expect(response.statusCode).to.equal(200)
      expect(response.result).to.equal('Hello!')
    }))

  it('should say World!', () =>
    Server.inject({
      method: 'GET',
      url: '/user/world'
    }).then(response => {
      expect(response.statusCode).to.equal(200)
      expect(response.result).to.equal('World!')
    }))

  it('should go Boom!', () =>
    Server.inject({
      method: 'GET',
      url: '/user/boom'
    }).then(response => {
      expect(response.statusCode).to.equal(400)
      expect(response.result.message).to.equal('Boom!')
    }))

  it('should echo!', () =>
    Server.inject({
      method: 'POST',
      url: '/user/echo',
      payload: {
        echo: 'Hapi'
      }
    }).then(response => {
      expect(response.statusCode).to.equal(200)
      expect(response.result).to.equal('Echo: Hapi!')
    }))
})
