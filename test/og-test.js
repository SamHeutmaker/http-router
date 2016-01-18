const chai = require('chai');
const chaiHttp = require('chai-http');
const og_server = require(__dirname + '../og-server');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
var port = 'localhost:3000';

describe('test for og-server', () => {
  it('should respond to a get request', (done) => {
    .request(port)
    .get('/test')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('test from get');
      done();
    });
  });

  it('should respond to a post request', (done) => {
    .request(port)
    .post('/test')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('test from post');
      done();
    });
  });

  it('should respond to a put request', (done) => {
    .request(port)
    .post('/test')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('test from put');
      done();
    });
  });

  it('should respond to a patch request', (done) => {
    .request(port)
    .post('/test')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('test from patch');
      done();
    });
  });

  it('should respond to a delete request', (done) => {
    .request(port)
    .post('/test')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('test from delete');
      done();
    });
  });

});
