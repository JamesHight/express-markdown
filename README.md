express-markdown
================

Express middleware for rendering markdown files

Usage
-----
	// !!!IMPORTANT: place this before static or similar middleware
	app.use(require('express-markdown')({

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