module.exports = {
	dev: {
		options: {
	        //quiet: false, // Supress any warnings thrown by other max count options.
	        //maxSelectors: 4096, // IE <= 9
	        //maxFileSize: 10240000
	    },
		src: ['<%= paths.dist %>/css/*.css']
	}
};
