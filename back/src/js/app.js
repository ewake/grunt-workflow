// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

(function ($) {	
	var window_w = $(window).width();
	
	$('.datepicker').datetimepicker({
		dateFormat: 'yy-mm-dd',
		//dateFormat: js_obj.dateFormat,
		showOn: 'button',
		changeMonth: true,
	    changeYear: true,
		buttonImage: js_obj.template_directory_uri + '/admin/assets/img/jquery-ui/datepicker.png',
		buttonImageOnly: true
	});
	
	$('.datetimepicker').datetimepicker({
		dateFormat: 'yy-mm-dd',
		//dateFormat: js_obj.dateFormat,
		showOn: 'button',
		changeMonth: true,
	    changeYear: true,
		buttonImage: js_obj.template_directory_uri + '/admin/assets/img/jquery-ui/datepicker.png',
		buttonImageOnly: true,
		//showButtonPanel: true,
    	closeText: js_obj.closeText,
    	currentText: js_obj.currentText,
    	monthNames: js_obj.monthNames,
    	monthNamesShort: js_obj.monthNamesShort,
    	dayNames: js_obj.dayNames,
    	dayNamesShort: js_obj.dayNamesShort,
    	dayNamesMin: js_obj.dayNamesMin,
    	firstDay: js_obj.firstDay,
    	isRTL: js_obj.isRTL
	});
	
	$(".fancybox").fancybox({
		//openEffect : 'elastic',
		//closeEffect : 'elastic',
		//nextEffect : 'fade',
		//prevEffect : 'fade',
		//nextEasing : 'easeOutBack',
		//prevEasing : 'easeOutBack',
		//openEasing : 'easeOutBack',
		//closeEasing : 'easeInBack',
		padding : 10,
		helpers : {
			title : {
				type : 'inside' // inside, outside, over, float
			}
		}
	});

	$(window).resize(function() {
		var window_w = $(window).width();

	});
	
	$(window).bind("load", function() {
		
	});
})(jQuery);
