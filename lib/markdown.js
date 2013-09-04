var fs = require('fs'),
	path = require('path'),
	url = require('url'),	
	markdown = require('marked');

function expressMarkdown(options) {
	if (!options) 
		throw new Error("Missing options argument");
	
	var dir = options.directory,
		view = options.view,
		variable = options.variable || 'markdown';

	if (!dir)
		throw new Error('Missing "directory" value in options');

	// clean up path, remove '..'
	dir = path.resolve(dir);

	return function(req, res, next) {
		var file = req.url.toString().toLowerCase();

		if (file.slice(-3) !== '.md' && file.slice(-9) !== '.markdown')
			return next();

		file = dir + '/' + url.parse(file).pathname;
		file = path.resolve(file);

		// make sure the final path is in our defined directory
		if (file.substr(0, dir.length) !== dir)
			return res.send(400);

		fs.exists(file, function(exists) {
			if (!exists)
				return next();

			fs.readFile(file, 'utf8', function(err, data) {
				var context = {};
				if(err)
					return next(err);

				data = markdown(data);
				
				if (view) {
					context[variable] = data;
					res.render(view, context);
				}
				else {
					res.send(data);
				}
			});
		});
	}
}

module.exports = expressMarkdown;
