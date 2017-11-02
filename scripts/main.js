$(document).ready(function() {
	$('.second_form').click(function() {
		$('.first_form').toggleClass('active');
	});

	$('.tittle').click(function() {
		$('.first_form').removeClass('active');
	});

	$('.main-slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 2000
	});
});