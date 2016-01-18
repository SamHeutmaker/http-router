const fs = require('fs');
// Main export
var Router = module.exports = exports = function() {
    // Set content type for all routes
    this.setContentType = function(contentType) {
      this.contentType = contentType;
    };
    // Set main folder for public documents
    this.setPublicFolder = function(publicFolder) {	
      this.publicFolder = publicFolder;
    };

    // An object for handling all routes
    this.router = {
      'GET': {},
      'POST': {},
      'PUT': {},
      'PATCH': {},
      'DELETE': {},
      'FourOhFour': function(req, res) {
        res.writeHead(404, {
          'Content-Type': this.contentType
        });
        res.write(JSON.stringify({
          msg: '404.'
        }));
        return res.end();
      }
    };
  }
  // HTTP Verbs
const verbs = ['get', 'put', 'post', 'patch', 'delete'];

  // Loop through verbs and declare new function in proper object in Router.route
verbs.forEach(function(el, i) {
	// Verb must be uppercase in some 
  var uppercaseVerb = el.toUpperCase();
  Router.prototype[el] = function(url, fileToRender, callback) {
    // Create wrapper callback
    var newCallback = (req, res) => {
      // Write Head Information
      res.writeHead(200, {
        'Content-Type': this.contentType
      });
      // Execute user callback
      callback(req, res);
      // Render file is filepath is given
      if (fileToRender) {
      	// Read file to be rendered
        var newFileToRender = this.publicFolder + "/" + fileToRender;
        var toRender = fs.createReadStream(newFileToRender);
        // Pipe file
        toRender.pipe(res);
      }
    };
    // Declare actual function in Router.route[verb][url]
    this.router[uppercaseVerb][url] = newCallback;
  };
});

// For server. returns proper function based on URL and VERB
Router.prototype.route = function(options) {
  return (req, res) => {
  	// Get current route function or 404 if not a real route
    var routeFunction = this.router[req.method][req.url] || this.router.FourOhFour;
    routeFunction(req, res);
  };
};