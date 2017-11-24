$(document).ready(function() {
	$('.second_form').click(function() {
		$('.first_form').toggleClass('active');
	});

	$('.tittle').click(function() {
		$('.first_form').removeClass('active');
	});

	$('.main-slider_main').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
  		cssEase: 'linear',
  		speed: 2000
	});
});