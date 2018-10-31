(function($){
	"use strict";

	var ta_nav = {

		initialize: function() {
			this.event();
			this.toggler();
			this.mobileMenu();
			this.dropdown();
		},

		event : function(){},

		toggler : function(){
			$('.navbar-toggler').each(function(){
				var _el = $(this);

				_el.on('click', function(){
					_el.toggleClass('active');
				});

				$(window).resize(function(){ $('.navbar-toggler').removeClass('active'); });

			});
		},

		dropdown : function(){
			$('.dropdown .nav-link').each(function() {
				var _el = $(this);
				_el.on('click', function(){
					_el.parent().find('> .navbar-nav').toggleClass('in');
				});
			});
			$(window).resize(function(){ $('.dropdown .nav-link').find('> .navbar-nav').removeClass('in'); });
		},

		mobileMenu : function(){

			if( $('.ta_nav .navbar-mobile')[0] && $('.ta_nav-mobile')[0] ){

				$('.ta_nav .navbar-mobile').each(function(){
					var _m = $(this).clone();
					_m.appendTo('.ta_nav-mobile .navbar');
				});

				
				if( !$('.navbar-toggler').attr('data-target') ){
					$('.navbar-toggler').on('click', function(){
						$('.ta_nav-mobile').toggleClass('in');
						$('#fluidcontainer').toggleClass('pl-250px');
					});
				}

				$('.ta_nav-mobile .ta_nav-mobile-overlay').on('click', function(){
					$('.ta_nav-mobile').removeClass('in');
					$('.navbar-toggler').removeClass('active');
					$('#fluidcontainer').removeClass('pl-250px');
				});

				$(window).resize(function(){ $('.ta_nav-mobile').removeClass('in'); $('#fluidcontainer').removeClass('pl-250px'); });

			}

		},

	};

	// Initialize
	$(document).ready(function(){
		ta_nav.initialize();
	});

}(jQuery));
