const Code = require('code')
const expect = Code.expect
const Lab = require('lab')
const lab = (exports.lab = Lab.script())

const describe = lab.describe
const it = lab.it
const after = lab.after

const Service = require('../../components/user/service')

describe('service tests - users', () => {
  it('should say Hello!', () => {
    return Service.hello().then(response => {
      expect(response).to.equal('Hello!')
    })
  })

  it('should say World!', () => {
    return Service.world().then(response => {
      expect(response).to.equal('World!')
    })
  })

  it('should go Boom!', () => {
    return Service.boom().catch(err => {
      expect(err.message).to.equal('Boom!')
    })
  })
})
