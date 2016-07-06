module.exports = {
	dist: {
		options: {
			position: 'top',
			banner: "<%= banner %>",
			linebreak: false
	    },
	    files: {
	    	src: [
	    	      '<%= dist_files.css.app %>'
	    	]
	    }
	}
};
