var chai = require('chai');
var assert =chai.assert;
var should = chai.should();
const expect = chai.expect;
let server = require('../app')

let chaiHttp = require('chai-http');
chai.use(chaiHttp)
describe('User detail api',function(){
    it('get user detail',function(done){
        chai.request(server)
        .get('/api/user/user-detail/')
        .end((err,response)=>{ 
            expect(response.status).to.be.equal(200)
           // expect(response.body).to.have.all.keys('status');
            done();
        })
    })
})