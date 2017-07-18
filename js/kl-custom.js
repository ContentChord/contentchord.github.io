;
(function ($) {
	"use strict";

	$(document).ready(function () {

		// MailChimp working newsletter
		$('#mc-form').ajaxChimp({
			url: 'https://contentchord.us11.list-manage.com/subscribe/post?u=5931472e5ed045cbd5dded9a3&amp;id=5830de2520',
			callback: newsletterCallback
		});

		function newsletterCallback(data) {
			if (data.result === 'success') {
				var message = data.msg,
					themessage = $('<span class="success alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' + message + '</span>');
				$('#notification_container').html(themessage);
				setTimeout(function () {
					themessage.addClass('animate');
				}, 300)
			} else {
				var message = data.msg.substring(4),
					themessage = $('<span class="alert alert-warning"><button type="button" class="close icon-close" data-dismiss="alert" aria-hidden="true"></button>' + message + '</span>');
				$('#notification_container').html(themessage);
				setTimeout(function () {
					themessage.addClass('animate');
				}, 300);
			}

		}

		// END MailChimp working newsletter

	}); // end of document ready

})(jQuery);