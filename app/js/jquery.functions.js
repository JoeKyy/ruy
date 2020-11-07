$(function () {
	$(window).on('load resize orientationchange', function() {
		$('.slider').each(function(){
            var $carousel = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 768) {
				if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
				}
            }
            else{
                
				$carousel.slick({
					dots: false,
					infinite: true,
					arrows: true,
					speed: 300,
					slidesToShow: 6,
					slidesToScroll: 6,
					responsive: [{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							dots: true,
						}
					}]
				});
            }
        });
	});

	$('.highlight--slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	$('.guide--rotate-title').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.guide--rotate-image',
	});
	
	$('.guide--rotate-image').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.guide--rotate-title',
		centerMode: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			  }
			}
		  ]
	});	

	function plansRotate() {
		$('.plans--rotate').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				  }
				},
			  ]
		});
	  }

	  plansRotate();
	  
	  function destroyPlansRotate() {
		if ($('.plans--rotate').hasClass('slick-initialized')) {
		  $('.plans--rotate').slick('destroy');
		}      
	  }

	  $('.proposta--slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	$('.nav-button').click(function(){
		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$('.nav-menu').addClass('nav-menu--open');
			$('.nav-menu').removeClass('nav-menu--close');
		} else {
			$(this).removeClass('is-active');
			$('.nav-menu').removeClass('nav-menu--open');
			$('.nav-menu').addClass('nav-menu--close');
		}
	});

	$('.menu li:first-child').addClass('active');
	$('.tab-content').hide();
	$('.tab-content:first').show();

	$('.menu li').click(function(){
		$('.menu li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		destroyPlansRotate();
		plansRotate();
		
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).show();
		return false;
	  });

});