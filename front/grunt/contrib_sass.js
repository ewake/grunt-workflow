// Takes your SCSS files and compiles them to CSS
module.exports = {
	dev: {
	    options: {
	    	trace: true
	    },
	    files: {
	      '<%= dist_files.css.app_dev %>': '<%= src_files.sass.app %>'
	    }
	},
	dist: {
	  options: {
	    style: 'compressed' // nested, compact, compressed, expanded
	  },
	  files: {
	    '<%= dist_files.css.app %>': '<%= src_files.sass.app %>'
	  }
	}
};
