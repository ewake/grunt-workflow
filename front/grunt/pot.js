module.exports = {
	pot: {
		options: {
			text_domain: 'messages',
		    dest: '<%= paths.dist_lang %>/',
		    keywords: ['__', '_e', '_n', '_en'],
		    msgmerge: true,
		    //msgid_bugs_address: '<%= pkg.bugs.email %>',
		    encoding: 'UTF-8'
		},
		files: {
			src: ['<%= src_files.lang %>'],
		    //expand: true, // Warning: pattern.indexOf is not a function Use --force to continue.
		},
	}
};
