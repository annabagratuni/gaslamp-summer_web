
$(document).ready(function(){

	$('.parallax-window').parallax({
		imageSrc: 'img/union-1.png',
		naturalWidth: 1880,
		naturalHeight: 1248,
		speed: 0.1,
		ZIndex: -100,
		bleed: 0.5,
		iosFix: true,
		androidFix: true
	});

	$('.parallax-header').parallax({
		imageSrc: 'img/header-bg.jpg',
		naturalWidth: 1880,
		naturalHeight: 1248,
		speed: 0.1,
		ZIndex: -100,
		//bleed: 0.5,
		iosFix: true,
		androidFix: true
	});

	$(".owl-carousel").owlCarousel({
		items: 2,
		loop:true,
		center:true,
		margin:15,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:false,
		dots:false,
		nav:false,
		responsive:{
			0:{
				items:1,
				center:false
			},
			600:{
				items:2,
			}
		}
	});

	//jQuery Selectric https://selectric.js.org/index.html
	$('select').selectric({
		maxHeight: 200
	});

});