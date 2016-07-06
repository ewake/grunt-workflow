// Takes your SCSS files and compiles them to CSS
module.exports = {
	dev: {
	    options: {
	    	ieCompat: true, // Enforce the CSS output is compatible with Internet Explorer 8.
	    	compress: true, // Compress output by removing some whitespaces.   	
	    	sourceMap: true,
	    	
	    	// Set the parser's optimization level. 
	    	// The lower the number, the less nodes it will create in the tree. 
	    	// This could matter for debugging, or if you want to access the individual nodes in the tree.
	    	//optimization: true,
	    },
	    files: {
	    	'<%= dist_files.css.app_dev %>': '<%= src_files.less.app %>',
	    }
	},
	dist: {
	    options: {
	    	ieCompat: true, // Enforce the CSS output is compatible with Internet Explorer 8.
	    	compress: true, // Compress output by removing some whitespaces.   	
	    	//sourceMap: true,
	    	
	    	// Set the parser's optimization level. 
	    	// The lower the number, the less nodes it will create in the tree. 
	    	// This could matter for debugging, or if you want to access the individual nodes in the tree.
	    	//optimization: true,
	    },
	    files: {
	    	'<%= dist_files.css.app %>': '<%= src_files.less.app %>',
	    }
	}
};
