$(document).ready(function() {
	$('.second_form_button').click(function() {
		
		var logo = document.getElementById("first_form");
	    TweenLite.to(logo, 0.5, {width:"100%", ease:Sine.easeInOut});
	    TweenLite.to(logo, 0.5, {height:"70vh", ease:Sine.easeInOut, delay:1});
	});

	$('.title').click(function() {
		var logo = document.getElementById("first_form");
	    TweenLite.to(logo, 0.5, {width:"0%", ease:Sine.easeInOut});
	    TweenLite.to(logo, 0.5, {height:"13vh", ease:Sine.easeInOut, delay:0.7 });
	});

	$('.main-slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 2000
	});
});