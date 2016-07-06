module.exports = {
	all: {
		src: '<%= paths.src %>/sprite/**/*.png',
		dest: '<%= paths.src_img %>/sprite/custom.png',
		destCSS: '<%= paths.src %>/scss/sprite/mixins.generated.scss',
		cssFormat: 'scss',
		imgPath: '../img/sprite/custom.png',
		algorithm: 'binary-tree',
	    //cssVarMap: (sprite) ->
	    //sprite.name = 'sprite-' + sprite.name,
		cssOpts: {
			cssClass: function(item) {
				return ".sprite-" + item.name;
			}
		}
	}
};
