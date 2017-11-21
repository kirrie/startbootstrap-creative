(function($) {
	var dDay = new Date('2018-01-06'),
		today = new Date(),
		timeDiff = Math.abs(dDay.getTime() - today.getTime()),
		diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

	if(diffDays >= 0) {
		$('#head-title').html('D-' + diffDays + '일');
	}
})(jQuery);
