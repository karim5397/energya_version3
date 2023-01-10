

jQuery(function ($) {
	'use strict';
	
	$(window).on('load', function() {
		$('.preloader-wrapper').fadeOut();
	});

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();




		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum.toLocaleString('en-US'));
						}
					});
				});
			}
		}
		counter();

	// scroll to top btn show/hide
	function scrollTopBtn() {
		var scrollToTop = $('#back-to-top'),
			scroll = $(window).scrollTop();
		if (scroll >= 50) {
			scrollToTop.fadeIn();
		} else {
			scrollToTop.fadeOut();
		}
	}
	scrollTopBtn();
	});


	$(document).ready(function () {

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$('.site-navigation .dropdown-toggle').on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});

				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();


		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();


		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();


		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();


		// Shuffle js filter and masonry
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		projectShuffle();


		// testimonial carousel
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 600,
				arrows: false
			});
		}
		testimonialCarousel();


		// team carousel
		function teamCarousel() {
			$('.team-slide').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		teamCarousel();
		// team carousel
		function serviceCarousel() {
			$('.service-carousel').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				loop:true,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		serviceCarousel();



		// change search icon to search word on small media & remove bars  
			var query=matchMedia("(max-width:991px)")
			function checkMediaQuery(){
				if(window.innerWidth <992){
						$('#search').html('search');
				}else{
						$('#search').html('<i class="fas fa-search"></i>');
				}
			}	
			checkMediaQuery();
			window.addEventListener('resize', checkMediaQuery);


			

		// media popup
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: 'gallery-popup',
				transition: 'slideshow',
				innerHeight: '500'
			});
			$('.popup').colorbox({
				iframe: true,
				innerWidth: 600,
				innerHeight: 400
			});
		}
		mediaPopup();

	});


});

$('.certificat-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
      
    }
})


$('.client-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:8,
        }
    }
})

$('.single-project').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
      
    }
})

AOS.init({
	delay: 500, 
	duration: 5000, 

});

// change search icon to search word on small media & remove bars  
var query=matchMedia("(max-width:991px)")
function checkMediaQuery(){
	if(window.innerWidth <992){
			$('#search').html('search');
	}else{
			$('#search').html('<i class="fas fa-search"></i>');
	}
}	
window.addEventListener('resize', checkMediaQuery);



//map
        
$(document).ready(function(){


/* map parameters */
var wrld = {
  map: 'world_mill_en',
  normalizeFunction: 'polynomial',
  regionStyle: regionStyling,
  zoomOnScroll:false,
  backgroundColor: '#22313F',
  series: {
    regions: [{
      values: gbData,
      attribute: 'fill',
      scale: ['#d8d8d8']}
             ]},
  onRegionTipShow: function(e, el, code){
    el.html(el.html());
    $(".lbl-hover").html('Hovered country value: ' + gbData[code]);
  }
};

/* Setting up of the map */
if ($('#world-map').length > 0) {
  $('#world-map').vectorMap(wrld);
}

}) // End - $(document).ready...




/* Basic styling for the map */
var regionStyling = { initial: { fill: '#e68220' }, hover: { fill: '#e68220' }, selected: { fill: '#B0013A' } };
/* Data that is passed to the map */
var gbData = { 
  "AF": 1.0,
  "AL": 2.0,
  "AS": 4.0,
  "AD": 5.0,
  "AO": 1.0,
  "AI": 2.0,
  "AQ": 3.0,
  "AG": 4.0,
  "AR": 5.0,
  "AM": 1.0,
  "AW": 2.0,
  "AU": 3.0,
  "AT": 4.0,
  "AZ": 5.0,
  "BS": 1.0,
  "BH": 2.0,
  "BB": 4.0,
  "BY": 5.0,
  "BE": 1.0,
  "BZ": 2.0,
  "BJ": 3.0,
  "BM": 4.0,
  "BT": 5.0,
  "BA": 2.0,
  "BW": 3.0,
  "IO": 5.0,
  "VG": 1.0,
  "BG": 3.0,
  "BF": 4.0,
  "MM": 5.0,
  "KH": 2.0,
  "CM": 3.0,
  "CV": 5.0,
  "KY": 1.0,
  "CF": 2.0,
  "TD": 3.0,
  "CL": 4.0,
  "CN": 5.0,
  "CX": 1.0,
  "CC": 2.0,
  "CO": 3.0,
  "KM": 4.0,
  "CK": 5.0,
  "CR": 1.0,
  "HR": 2.0,
  "CU": 3.0,
  "CY": 4.0,
  "CZ": 5.0,
  "CD": 1.0,
  "DK": 2.0,
  "DM": 4.0,
  "DO": 5.0,
  "EC": 1.0,
  "SV": 3.0,
  "GQ": 4.0,
  "ER": 5.0,
  "EE": 1.0,
  "ET": 2.0,
  "FK": 3.0,
  "FO": 4.0,
  "FJ": 5.0,
  "FI": 1.0,
  "PF": 3.0,
  "GA": 4.0,
  "GM": 5.0,
  "GE": 1.0,
  "GI": 4.0,
  "GR": 5.0,
  "GL": 1.0,
  "GD": 2.0,
  "GU": 3.0,
  "GT": 4.0,
  "GN": 5.0,
  "GW": 1.0,
  "GY": 2.0,
  "HT": 3.0,
  "VA": 4.0,
  "HN": 5.0,
  "HK": 1.0,
  "HU": 2.0,
  "IS": 3.0,
  "IS": 4.0,
  "IN": 5.0,
  "IR": 2.0,
  "IE": 4.0,
  "IM": 5.0,
  "IL": 1.0,
  "CI": 3.0,
  "JM": 4.0,
  "JE": 1.0,
  "KZ": 3.0,
  "KI": 5.0,
  "KW": 1.0,
  "KG": 2.0,
  "LA": 3.0,
  "LV": 4.0,
  "LB": 5.0,
  "LS": 1.0,
  "LR": 2.0,
  "LI": 4.0,
  "LT": 5.0,
  "LU": 1.0,
  "MO": 2.0,
  "MK": 3.0,
  "MG": 4.0,
  "MW": 5.0,
  "MY": 1.0,
  "MV": 2.0,
  "ML": 3.0,
  "MT": 4.0,
  "MH": 5.0,
  "MR": 1.0,
  "MU": 2.0,
  "YT": 3.0,
  "FM": 5.0,
  "MD": 1.0,
  "MC": 2.0,
  "MN": 3.0,
  "ME": 4.0,
  "MS": 5.0,
  "NA": 3.0,
  "NR": 4.0,
  "NP": 5.0,
  "NL": 1.0,
  "AN": 2.0,
  "NC": 3.0,
  "NZ": 4.0,
  "NI": 5.0,
  "NE": 1.0,
  "NU": 3.0,
  "KP": 4.0,
  "MP": 5.0,
  "NO": 1.0,
  "PK": 3.0,
  "PW": 4.0,
  "PA": 5.0,
  "PG": 1.0,
  "PY": 2.0,
  "PE": 3.0,
  "PH": 4.0,
  "PN": 5.0,
  "PT": 2.0,
  "PR": 3.0,
  "CG": 5.0,
  "RO": 1.0,
  "RW": 3.0,
  "BL": 4.0,
  "SH": 5.0,
  "KN": 1.0,
  "LC": 2.0,
  "MF": 3.0,
  "PM": 4.0,
  "VC": 5.0,
  "WS": 1.0,
  "SM": 2.0,
  "ST": 3.0,
  "RS": 1.0,
  "SC": 2.0,
  "SL": 3.0,
  "SG": 4.0,
  "SK": 5.0,
  "SI": 1.0,
  "SB": 2.0,
  "SO": 3.0,
  "ZA": 4.0,
  "KR": 5.0,
  "ES": 1.0,
  "LK": 2.0,
  "SR": 4.0,
  "SJ": 5.0,
  "SZ": 1.0,
  "SE": 2.0,
  "CH": 3.0,
  "SY": 4.0,
  "TW": 5.0,
  "TJ": 1.0,
  "TZ": 2.0,
  "TH": 3.0,
  "TL": 4.0,
  "TG": 5.0,
  "TK": 1.0,
  "TO": 2.0,
  "TT": 3.0,
  "TN": 4.0,
  "TC": 2.0,
  "TV": 3.0,
  "UG": 4.0,
  "UA": 5.0,
  "VI": 1.0,
  "VU": 3.0,
  "VE": 4.0,
  "VN": 5.0,
  "WF": 1.0,
  "EH": 2.0,
  "YE": 3.0,
  "ZM": 4.0,
  "ZW": 5.0,    
  "SS": 1.0,
  "_2": 2.0,
  "TF": 3.0,

};



