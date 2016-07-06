module.exports = {
	options: { 
		banner: '<%= banner %>',
	    mangle: false, // Use if you want the names of your functions and variables unchanged
	    preserveComments: false, // false 'all' 'some'
	    compress: true,
		//sourceMap: true,
		//beautify: true, // beautify your code for debugging/troubleshooting purposes
	},
	top: {
		options: { 
		    sourceMapIn: '<%= tmp_files.js.top %>.map',
		},
		files: {
			'<%= dist_files.js.top %>': '<%= tmp_files.js.top %>'
		}
	},
	app: {
		options: { 
		    sourceMapIn: '<%= tmp_files.js.app %>.map',
		},
		files: {
			'<%= dist_files.js.app %>': '<%= tmp_files.js.app %>'
		}
	}
};
