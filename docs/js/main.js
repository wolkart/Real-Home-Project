$(document).ready(function() {

		// Вызов слайдера Owl-carousel
		$("#top-slider").owlCarousel({
			singleItem : true,
			navigation: false,
			theme: "top-slider-theme",
			navigationText : ["",""],
			slideSpeed : 600
		});

		$("#agents-slider").owlCarousel({
			singleItem : true,
			navigation: false,
			theme: "agents-slider-theme",
			navigationText : ["",""],
			slideSpeed : 600
		});

		$("#testimonials-slider").owlCarousel({
			singleItem : true,
			navigation: true,
			theme: "testimonials-slider-theme",
			navigationText : ["",""],
			slideSpeed : 600
		});

	
});