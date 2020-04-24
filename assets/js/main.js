$ (document) .ready (function(){
	
	//menu-isotope-area
	
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.menu-isotope-button').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	
	// wine-item slider
	
	var slider = tns({
		container: '.wine-slider-active',
		items: 4,
		slideBy: 'page',
		autoplay: true,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>' , '<i class="fas fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },	
		  539: {
			items: 1
		  },
		  540: {
			items: 2
		  },		  
		  768: {
			items: 3
		  },
		  992: {
			items: 4
		  },
		  1169: {
			items: 4
		  }
		}
	});
	
	// team-area slider
	
	var slider = tns({
		container: '.team-slider-active',
		items: 3,
		slideBy: 'page',
		autoplay: true,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>' , '<i class="fas fa-angle-left"></i>'],
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },	
		  540: {
			items: 2
		  },
		  700: {
			items: 2
		  },
		  992: {
			items: 3
		  },
		  1169: {
			items: 3
		  }
		}
	});
	
	// testimonial slider
	
	var slider = tns({
		container: '.testimonial-slider-active',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		nav: true,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: false,
	});
	
	// scroll-top
	
	$(window).scroll(function () {
		if($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn ();
		} else {
			$('.scroll-top').fadeOut ();
		}	
	});
			
	$('.scroll-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	// mean-menu 
	
	 jQuery('#mean-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "1169"
    });
})