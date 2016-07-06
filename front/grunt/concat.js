module.exports = {
	dist: {
		options: {
			sourceMap: true,
		},
		files: {
	        '<%= tmp_files.js.top %>': '<%= src_files.js.top %>',
	        '<%= tmp_files.js.app %>': '<%= src_files.js.app %>',
	    }
	}
};
