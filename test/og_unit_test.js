//Unit testing for our server and router
const Router = require( __dirname + '/../lib/og-router');
const expect = require('chai').expect;

var URI = '/test';

describe('Router' , () => {

	//Tests the router object
	it('should have routes to fat stacks' , () => {
		var router = new Router();
		expect(router).to.have.property('route');
		expect(router.route).to.be.a('function');
	});

	//
	it('should register get requests like a gangsta' , () => { 
		var router = new Router();
		var testReq = {method: 'GET' , url: '/test'};

		router.get(URI , ( req , res ) => {

			expect(res.head).to.eql('')

		});
	});

	// it('should be able to register post requests' , () => {
	// 	var router = new Router();
	// 	var testReq = {method: 'GET' , url: '/test'};

	// 	router.post(URI , ( req , res ) => {

	// 	});
	// });

	// it('should handle the 404 like a real nigga' , () => {
	// 	var router = new Router();
	// 	var toBeFourOhFour = router.route;

	// 	//Expect the 404 function at a method with no definition
	// 	expect( toBeFourOhFour('/test' , res) ).to.be.a('function');

	// 	//Should receive a JSON object {msg: '404'};
	// 	expect(res.msg).to.eql('404');

	// 	// router.get(URI , ( req , res ) => {

	// 	// });
	// });
});

