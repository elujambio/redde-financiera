jQuery(document)
	.ready(function($) {

		$Navbar = jQuery("#navbar");

		$(window).scroll(function (e) {
			var $top = $(window).scrollTop(); // how many pixels scrolled from top
			// console.log(window.innerWidth);
			console.log($top);
			if ( window.innerWidth > 1080 ) {
				if ( $top > 72 ) {
					TweenMax
						.to($Navbar, 1, { height:96 });
						// .to($Navbar, 1, { paddingTop: "18px", paddingBottom: "18px" });
				} else {
					TweenMax
						.to($Navbar, 1, { height: 168 });
				}
			}
		});



		SliderTimeline = new TimelineMax; 
		$Slider = jQuery("#slider");  
		SliderTimeline
			.to($Slider, 1, { x:"-100%", delay: 2.5 })
			.to($Slider, 1, { x:"-200%", delay: 2.5 })
			.to($Slider, 1, { x:"-300%", delay: 2.5 })
			.to($Slider, 1, { x:"0%", delay: 2.5 })
			.repeat(-1);

		jQuery("#section-1-link")
			.click(function(){
				console.log("clicked");
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#section-1").offset().top-144 } });
			});
		jQuery("#section-2-link")
			.click(function(){
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#section-2").offset().top-144 } });
			});
		jQuery("#section-3-link")
			.click(function(){
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#section-3").offset().top-144 } });
			});
		jQuery("#link-to-business")
			.click(function(){
				console.log("clicked");
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#business").offset().top-144 } });
			});
		jQuery("#link-to-group")
			.click(function(){
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#group").offset().top-144 } });
			});
		jQuery("#link-to-pronto")
			.click(function(){
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#pronto").offset().top-144 } });
			});
		jQuery(".link-to-contact")
			.click(function(){
				TweenMax
					.to(window, 1, { scrollTo: { y: $("#section-3").offset().top-144 } });
			});
		menuToggled = false;
		jQuery("#burger")
			.click(function(){
				if (menuToggled == false) {
						menuToggled = true;
						TweenMax
							.to(jQuery("#burger div:nth-of-type(1)"), .5, { y: 6, rotationZ: "45deg"});				
						TweenMax
							.to(jQuery("#burger div:nth-of-type(2)"), .5, { opacity: 0 });				

						TweenMax
							.to(jQuery("#burger div:nth-of-type(3)"), .5, { y: -6, rotationZ: "-45deg"});
						TweenMax
							.to(jQuery("#menu"), .5, { x: "-100%" });
				} else {
					menuToggled = false;
					TweenMax
						.to(jQuery("#burger div:nth-of-type(1)"), .5, { y: 0, rotationZ: "0"});				
					TweenMax
						.to(jQuery("#burger div:nth-of-type(2)"), .5, { opacity: 1 });				

					TweenMax
						.to(jQuery("#burger div:nth-of-type(3)"), .5, { y: 0, rotationZ: "0"});
					TweenMax
						.to(jQuery("#menu"), .5, { x: "0%" });
				}

			});

});