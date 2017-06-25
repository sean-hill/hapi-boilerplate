const Code = require('code')
const expect = Code.expect
const Lab = require('lab')
const lab = (exports.lab = Lab.script())

const describe = lab.describe
const it = lab.it
const after = lab.after

const Service = require('../../components/user/service')

describe('service tests - users', () => {
  it('should say Hello!', () =>
    Service.hello().then(response => expect(response).to.equal('Hello!')))

  it('should say World!', () =>
    Service.world().then(response => expect(response).to.equal('World!')))

  it('should go Boom!', () =>
    Service.boom().catch(err => expect(err.message).to.equal('Boom!')))

  it('should go echo!', () =>
    Service.echo('Hapi').catch(err =>
      expect(err.message).to.equal('Echo: Hapi!')
    ))
})
