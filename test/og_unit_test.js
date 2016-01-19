//Unit testing for our server and router
const Router = require( __dirname + '/../lib/og-router');
const expect = require('chai').expect;
const URI = '/test';
var router = new Router();

// Set up streaming ability
var fakeStream = function(){
	this.readable = true;
	this.writeable = false;
}
require('util').inherits(fakeStream, require('stream'));

// Extract args to `write` and emit as `data` event.
fakeStream.prototype.write = function () {
  args = Array.prototype.slice.call(arguments, 0);
  this.emit.apply(this, ['data'].concat(args))
};

// Extract args to `end` and emit as `end` event.
fakeStream.prototype.end = function () {
  args = Array.prototype.slice.call(arguments, 0);
  this.emit.apply(this, ['end'].concat(args))
};


// Router Testing
describe('Router' , () => {

	// Tests the router object
	it('should have properties of a router' , (done) => {
		expect(router).to.have.property('route');
		expect(router.route).to.be.a('function');
		done();
	});

	// Test GET route
	it('should register get requests' , (done) => { 
		var testReq = {method: 'GET' , url: URI};
		var testRes = new fakeStream();
		testRes.writeHead =  function(string, obj){
			this.status = string; this.head = obj
		};
		var called = false;
		router.get(URI, 'test.html', ( req , res ) => {
			expect(res.status).to.eql(200);
			called = true;
			done();
		});
		router.route()(testReq, testRes);
		expect(called).to.equal(true);
	});

	// Test POST route
	it('should register post requests' , (done) => { 
		var testReq = {method: 'POST' , url: URI};
		var testRes = new fakeStream();
		testRes.writeHead =  function(string, obj){
			this.status = string; this.head = obj
		};
		var called = false;
		router.post(URI, 'test.html', ( req , res ) => {
			expect(res.status).to.eql(200);
			called = true;
			done();
		});
		router.route()(testReq, testRes);
		expect(called).to.equal(true);
	});
		// Test PATCH route
	it('should register post requests' , (done) => { 
		var testReq = {method: 'PATCH' , url: URI};
		var testRes = new fakeStream();
		testRes.writeHead =  function(string, obj){
			this.status = string; this.head = obj
		};
		var called = false;
		router.patch(URI, 'test.html', ( req , res ) => {
			expect(res.status).to.eql(200);
			called = true;
			done();
		});
		router.route()(testReq, testRes);
		expect(called).to.equal(true);
	});
		// Test PUT route
	it('should register post requests' , (done) => { 
		var testReq = {method: 'PUT' , url: URI};
		var testRes = new fakeStream();
		testRes.writeHead =  function(string, obj){
			this.status = string; this.head = obj
		};
		var called = false;
		router.put(URI, 'test.html', ( req , res ) => {
			expect(res.status).to.eql(200);
			called = true;
			done();
		});
		router.route()(testReq, testRes);
		expect(called).to.equal(true);
	});
		// Test DELETE route
	it('should register post requests' , (done) => { 
		var testReq = {method: 'DELETE' , url: URI};
		var testRes = new fakeStream();
		testRes.writeHead =  function(string, obj){
			this.status = string; this.head = obj
		};
		var called = false;
		router.delete(URI, 'test.html', ( req , res ) => {
			expect(res.status).to.eql(200);
			called = true;
			done();
		});
		router.route()(testReq, testRes);
		expect(called).to.equal(true);
	});
});

