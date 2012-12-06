express-markdown
================

Expressjs middleware for rendering markdown files

Usage
-----

	var expressMarkdown = require('express-markdown');

	// !!!IMPORTANT: place this before static or similar middleware
	app.use(expressMarkdown({

	  // directory where markdown files are stored
	  // required
	  directory: __dirname + '/public', 

	  // view to use for rendering markdown file
	  // optional
	  // default is undefined, no view
	  view: 'foo',

	  // name of markdown variable passed in the context when rendering
	  // optional
	  // default 'markdown'
	  variable: 'bar'

	}));