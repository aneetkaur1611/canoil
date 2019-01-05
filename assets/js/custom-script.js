//var $ = jQuery.noConflict();
////////////////
jQuery(document).ready(function () {
	jQuery(".set > a").on("click", function () {
		if (jQuery(this).hasClass("active")) {
			jQuery(this).removeClass("active");
			jQuery(this).siblings(".content").slideUp(200);
			jQuery(".set > a i").removeClass("fa-minus").addClass("fa-plus");
		}
		else {
			jQuery(".set > a i").removeClass("fa-minus").addClass("fa-plus");
			jQuery(this).find("i").removeClass("fa-plus").addClass("fa-minus");
			jQuery(".set > a").removeClass("active");
			jQuery(this).addClass("active");
			jQuery(".content").slideUp(200);
			jQuery(this).siblings(".content").slideDown(200);
		}
	});
	////////////////////////////////
	if (jQuery(window).width() < 767) {
		document.getElementById("hidemobile").src = "";
		resizeContent();
		new WOW().init();
	}
	else {
		jQuery('#fullpage').fullpage({
			autoScrolling: true
			, navigation: true
		});
	}
	////////////////////////
	jQuery(".develop-section .headbox1").click(function () {
		jQuery(".develop-section .hiddentext1").slideToggle();
	});
	////////////////////////
	jQuery(".develop-section .headbox2").click(function () {
		jQuery(".develop-section .hiddentext2").slideToggle();
	});
	////////////////////////
	jQuery(".develop-section .headbox3").click(function () {
		jQuery(".develop-section .hiddentext3").slideToggle();
	});
});
if (jQuery(window).width() < 767) {
	jQuery(window).resize(function () {
		resizeContent();
	});

	function resizeContent() {
		var windowHeight = jQuery(window).height();
		//var headerHeight = jQuery('header').outerHeight();
		jQuery('.logo-section').height(windowHeight);
	}
}
///////