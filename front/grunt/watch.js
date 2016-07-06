module.exports = {
  /*sass: {
	  files: ['<%= src_files.sass.watch %>'],
	  tasks: ['runsass']
  },*/
  less: {
	  files: ['<%= src_files.less.watch %>'],
	  tasks: ['runless']
  },
  app: {
	  files: ['<%= src_files.js.watch %>'],
	  tasks: ['js']
  }
};
