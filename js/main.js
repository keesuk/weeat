;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	/*
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
*/

/*
	var liActive = function() {

		$('.fh5co-nav ul .li0 a').on('click', function(event) {
			$(this).parent().find('a').removeClass('on');
			$(this).addClass('on');
		});
		
		$(window).on('scroll', function() {
			$('html').each(function() {
				if($(window).scrollTop() >= $(this).offset().top) {
					var id = $(this).attr('id');
					$('.fh5co-nav ul .li0 a').removeClass('on');
					$('.fh5co-nav ul .li0 a[href=#'+ id +']').addClass('on');
				}
			});
		});
	}
*/

	var liMove = function() {

		$(document).ready(function(){

			$('.fh5co-nav ul .li0').click(function(){

				var offset = $('#0').offset();
				$('html').animate({scrollTop : offset.top}, 400);

			});
			
			$('.fh5co-nav ul .li1').click(function(){

				var offset = $('#1').offset();
				$('html').animate({scrollTop : offset.top}, 400);

			});

		});
	}
	var noBackground = function() {

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 50) {
				$('.fh5co-nav').addClass('active');
			} else {
				$('.fh5co-nav').removeClass('active');
			}

		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};



	var goToTop = function() {

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 0) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var goToTopaactive = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$(location).attr("href", "http://toappsto.re/weeat1");
			

			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 80) {
				$('.js-gotop').addClass('active');
			} else {
				$('.js-gotop').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	
	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "slide",

			easing: "swing",
			direction: "horizental",

			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	// $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// $(window).resize(function(){
	  	// 	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// });

	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: true,
				hideDistantElements: false, 
				responsive: true,

			});
		}
	};

	var testimonialCarousel1 = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			margin:40,
			loop:false,
			autoWidth:true,
			items:4,
			dots:false,
			center: true,
		});

	};

	var testimonialCarousel2 = function(){
		
		var owl = $("#owl-demo");
		
		owl.owlCarousel({
			margin:0,
			loop:false,
			items:1,
			dots:false,
			center: true,
			nav: true,
		});

		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})
		
	};

	var testimonialCarousel3 = function(){
		
		var owl = $('.owl-carousel-food');
		owl.owlCarousel({
			margin:8,
			loop:false,
			autoWidth:true,
			items:2,
			itemsMobile:[768,2],
			dots:false,
			center: true,
		});

	};
	

	
	$(function(){
		/*mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();*/
		noBackground();
		/*liActive();*/
		liMove();
		contentWayPoint();
		dropdown();
		goToTop();
		goToTopaactive();
		loaderPage();
		counterWayPoint();
		counter();
		parallax();
		sliderMain();
		testimonialCarousel1();
		testimonialCarousel2();
		testimonialCarousel3();
	});


}());