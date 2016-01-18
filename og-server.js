const Router = require(__dirname + '/lib/og-router');
const http = require('http');

const PORT = 3000;

var router = new Router();

router.setContentType('text/html');
router.setPublicFolder('public');

var server = http.createServer(router.route()).listen(PORT, function(){
	console.log('Server up on port ' + PORT);
});




router.get('/home', function(req, res){

});


router.get('/contact', 'contact.html', function(req, res){
	
});	



