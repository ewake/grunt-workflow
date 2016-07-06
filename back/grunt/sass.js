// Takes your SCSS files and compiles them to CSS
module.exports = {
	dev: {
	    options: {
	    	outputStyle: 'expanded' // nested, expanded, compact, compressed
	    },
	    files: {
	      '<%= dist_files.css.app_dev %>': '<%= src_files.sass.app %>'
	    }
	},
	dist: {
	  options: {
		  outputStyle: 'compressed' // nested, expanded, compact, compressed
	  },
	  files: {
	    '<%= dist_files.css.app %>': '<%= src_files.sass.app %>'
	  }
	}
};
