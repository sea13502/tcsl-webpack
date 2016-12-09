var path = require( "path" );

module.exports = {
	entry:path.resolve("./main.js"),
	output:{
		filename:path.resolve("bundle.js")
	},
	externals:{
		"data":"data1"
	}
};