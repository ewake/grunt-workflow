module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {

    // Pass data to tasks
    data: {
      pkg: grunt.file.readJSON('package.json'),
      
      banner: "/*!\n" + " * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %>\n" + 
	    "<%= pkg.homepage ? \" * \" + pkg.homepage + \"\\n\" : \"\" %>" + " *\n" + 
	    " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author %>;" +
	    " Licensed <%= pkg.license %>\n" + 
	    " */\n\n",

      paths: {
        src:        'src',
        src_img:    'src/img',
        tmp:    'tmp',
        dist:       '../../../public_html/wp-content/themes/v3/admin/assets',
        dist_img:   '../../../public_html/wp-content/themes/v3/admin/assets/img',
      },
      
      src_files: {
    	  sass: {
    		  app: ['<%= paths.src %>/scss/app.scss'],
    		  watch: ['<%= paths.src %>/scss/**/*', '<%= paths.src %>/scss/*'],
    	  },
    	  less: {
    		  app: ['<%= paths.src %>/less/app.less'],
    		  watch: ['<%= paths.src %>/less/**/*', '<%= paths.src %>/less/*'],
    	  },
		  js: {
			  app: [
					'bower_components/fancybox/source/jquery.fancybox.js',
					//'bower_components/fancybox/source/helpers/jquery.fancybox-buttons.js',
					//'bower_components/fancybox/source/helpers/jquery.fancybox-thumbs.js',
					'<%= paths.src %>/js/vendor/jquery-ui-timepicker-addon.js',		
			        '<%= paths.src %>/js/app.js',
			  ],
			  watch: ['<%= paths.src %>/js/**/*', '<%= paths.src %>/js/*'],
		  }
      },
      
      tmp_files: {
		  js: {
			  app: '<%= paths.tmp %>/js/app.js',
		  }
      },
      
      dist_files: {
    	  css: {
    		  app: '<%= paths.dist %>/css/app.min.css',
    		  app_dev: '<%= paths.dist %>/css/app.css',
    	  },
    	  js: {
    		  app: '<%= paths.dist %>/js/app.min.js',
    		  app_dev: '<%= paths.dist %>/js/app.js',
    	  }
      },

      // secrets.json is ignored in git because it contains sensitive data
      secrets: grunt.file.readJSON('secrets.json')
    }
  });
};