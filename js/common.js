(function($) {
	var dDay = new Date('2018-01-06'),
		today = new Date(),
		timeDiff = Math.abs(dDay.getTime() - today.getTime()),
		diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

	if(diffDays >= 0) {
		$('#head-title').html('D-' + diffDays + '일');
	}

	var getParameterByName = function(name, url) {
		    if (!url) url = window.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, " "));
		};

	if(getParameterByName('utm_campaign') == 'lee-parents') {
		$('#bank-address').show();
	}
})(jQuery);
