$(document).ready(function(){

	"use strict";
	
	// Nav Sticky
	
	$(window).scroll(function(){
		if($(window).scrollTop() > 500 && !$('.mobile-toggle').is(":visible")){
			$('.top-bar').addClass('nav-sticky');
		}else{
			$('.top-bar').removeClass('nav-sticky');
		}
	});
	
	// Offscreen Nav
	
	$('.offscreen-toggle').click(function(){
		$('.main-container').toggleClass('reveal-nav');
		$('.offscreen-container').toggleClass('reveal-nav');
		$('.offscreen-menu .container').toggleClass('reveal-nav');
	});
	
	$('.main-container').click(function(){
		if($(this).hasClass('reveal-nav')){
			$('.main-container').toggleClass('reveal-nav');
			$('.offscreen-container').toggleClass('reveal-nav');
			$('.offscreen-menu .container').toggleClass('reveal-nav');
		}
	});
	
	// Detect logo dimensions and add correct class
	
	var logoImage = $('.top-bar .logo:first-of-type');
	
	var theImage = new Image();
	var src = logoImage.attr("src");
	if(src !== undefined){
		theImage.src = logoImage.attr("src");
		
		var logoWidth = theImage.width;
		var logoHeight = theImage.height;
		var logoRatio = logoWidth / logoHeight;
		
		if(logoRatio > 2.8){
			$('.top-bar .logo').addClass('logo-wide');
		}
		
		if(logoRatio < 2){
			$('.top-bar .logo').addClass('logo-square');
		}
	}
	
	// Mobile Toggle
	
	$('.mobile-toggle').click(function(){
		$('nav').toggleClass('open-nav');
	});
	
	// Fullscreen nav toggle
	
	$('.fullscreen-nav-toggle').click(function(){
		if(!$('.fullscreen-nav-container').hasClass('show-fullscreen-nav')){
			$('.fullscreen-nav-container').addClass('show-fullscreen-nav');
			setTimeout(function(){
				$('.fullscreen-nav-container').addClass('fade-fullscreen-nav');
			},100);
			$(this).addClass('toggle-icon');
		}else{
			$(this).removeClass('toggle-icon');
				$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
			setTimeout(function(){
				
				$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
			},500);
		}
	});	
	
	$('.fullscreen-nav-container .menu li a').click(function(){
		$('.fullscreen-nav-toggle').removeClass('toggle-icon');
			$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
		setTimeout(function(){
			$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
		},500);
	});
	
	// Margin first section for top bar
	
	if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
		$('.main-container').first().css('margin-top', $('nav').outerHeight());
	}
	
	$(window).resize(function(){
		if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
			$('.main-container').first().css('margin-top', $('nav').outerHeight());
		}
	});
	
	// Pad first section for overlay bar
	
	if($('nav').hasClass('overlay-bar') || $('nav').hasClass('contained-bar') ){
		var currentPad = parseInt($('.main-container').find(':first-child').css('padding-top'));
		var newPad = currentPad + $('nav').outerHeight() - 48;
		if(currentPad > 0){
			$('.main-container').children(':first').css('padding-top', newPad);
		}else if($('.main-container').find(':first').hasClass('hero-slider')){
			var height = parseInt($('.hero-slider .slides li:first-child').outerHeight());
			var newHeight = height + $('nav').outerHeight();
			$('.hero-slider .slides li').css('height', newHeight);
		}
	}
	
	
	// Fullwidth Subnavs
	
	// Position Fullwidth Subnavs fullwidth correctly

    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $('.container').outerWidth();
        containerOffset = containerOffset /2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function () {
        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.container').width());
			var offset = $(this).closest('.has-dropdown').offset();
			offset = offset.left;
			var containerOffset = $(window).width() - $('.container').outerWidth();
			containerOffset = containerOffset /2;
			offset = offset - containerOffset - 15;
			$(this).css('left', -offset);
        });
    });

	// Slider Initializations
	
	// $('.hero-slider').flexslider({});
	// $('.image-slider').flexslider({ animation: "slide"});
	// $('.testimonials-slider').flexslider({ directionNav: false });
	
	// Slide Sizes
	
	$('.slider-fullscreen .slides li').each(function(){
		$(this).css('height', $(window).height());
	});
	
	$('.fullscreen-element').each(function(){
		$(this).css('height', $(window).height());
	});


	// Feature Selector
	
	$('.selector-tabs li').click(function(){
		$(this).parent('.selector-tabs').children('li').removeClass('active');
		$(this).addClass('active');
		
		var activeTab = $(this).index() + 1;
		
		$(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
		$(this).closest('.feature-selector').find('.selector-content').children('li:nth-child('+activeTab+')').addClass('active');
	});
	
	// Append .background-image-holder <img>'s as CSS backgrounds
	
	$('.background-image-holder').each(function(){
		var imgSrc= $(this).children('img').attr('src');
		$(this).css('background', 'url("' + imgSrc + '")');
    	$(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
	});
	
	// Accordion
	
	$('.accordion li').click(function(){
		$(this).parent('.accordion').children('li').removeClass('active');
		$(this).addClass('active');
	});
    
    // Map Holder Overlay
	
	$('.map-holder').click(function(){
		$(this).addClass('on');
	});
	
	$(window).scroll(function(){
		if($('.map-holder').hasClass('on')){
			$('.map-holder').removeClass('on');
		}
	});
	
	// Map Details Holder
	
	$('.details-holder').each(function(){
		$(this).css('height', $(this).width());
	});
	
	$('.details-holder').mouseenter(function(){
		$(this).closest('.map-overlay').addClass('fade-overlay');
	}).mouseleave(function(){$(this).closest('.map-overlay').removeClass('fade-overlay');});
	
	
	// Expanding Lists (updated in Pivot 1.4.0)
	
	$('.expanding-ul li').click(function(){
		$('.expanding-ul li').removeClass('active');
		$(this).addClass('active');
	});

});


function startIsotope(){

	dynamicallyLoadJS(["/js/isotope.min.js"], () => {
	
		// Isotope Projects
		
		$('.projects-container').isotope({
			itemSelector: '.project',
			layoutMode: 'fitRows'
		});
		
		$('.filters li').click(function() {
			var current = $(this);
			
			current.siblings('li').removeClass('active');
			current.addClass('active');
			
			var filterValue = current.attr('data-filter');
			var container = current.closest('.projects-wrapper').find('.projects-container');
			container.isotope({ filter: filterValue });
		});
		
		// Isotope contained feature boxes
		
		$('.contained-features-wrapper').isotope({
			itemSelector: '.no-pad',
			layoutMode: 'masonry',
			masonry: {
				gutter: 0
			}
		});
	
		// Blog Masonry
		
		$('.blog-masonry-container').isotope({
			itemSelector: '.blog-masonry-item',
			layoutMode: 'masonry'
		});
	});

}

$(window).load(function(){

  "use strict";
  	
  
	// Align Elements Vertically
	
	alignVertical();
	alignBottom();
	
	$(window).resize(function(){
		alignVertical();
		alignBottom();
	});
    
    // Remove Loader
    
    $('.loader').css('opacity', 0);
    setTimeout(function(){$('.loader').hide();}, 600);
	
	$('.blog-filters li').click(function() {
	  var current = $(this);
	  
	  current.siblings('li').removeClass('active');
	  current.addClass('active');
	  
	  var filterValue = current.attr('data-filter');
	  var container = current.closest('.blog-masonry').find('.blog-masonry-container');
	  container.isotope({ filter: filterValue });
	});



});

function alignVertical(){

		$('.align-vertical').each(function(){
			var that = $(this);
			var height = that.height();
			var parentHeight = that.parent().height();
			var padAmount = (parentHeight / 2) - (height/2);
			that.css('padding-top', padAmount);
		});
	
}

function alignBottom(){
	$('.align-bottom').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight) - (height) - 32;
		that.css('padding-top', padAmount);
	});
}


// @see https://infoheap.com/jquery-check-if-element-is-visible-in-viewport/
function isVisible($el, offset=0) {
  var winTop = $(window).scrollTop();
  var winBottom = winTop + $(window).height();
  var elTop = $el.offset().top;
	var elBottom = elTop + $el.height();
  return ((elBottom - offset <= winBottom) && (elTop + offset >= winTop));
}


// @see https://infoheap.com/jquery-check-if-element-is-visible-in-viewport/
function isVisibleOrHasPassed($el) {
  var winTop = $(window).scrollTop();
  var winBottom = winTop + $(window).height();
  var elTop = $el.offset().top;
	var elBottom = elTop + $el.height();
  return (elBottom <= winBottom);
}


function dynamicallyLoadJS(javascripts, finishAction){
	var jsToLoadCount = javascripts.length;
	for(var i =0; i < javascripts.length; i++){
		var javascript = javascripts[i];
		$.getScript(javascript, function(){
			jsToLoadCount--;
			if(jsToLoadCount == 0){
				finishAction();
			}
		});
	}
}


var lazyCount = 0;
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
		var file = elmnt.getAttribute("include-html");
		var isLazy = false;
		var isLazyLoaded = false;
		if (!file) {
			file = elmnt.getAttribute("lazy-include-html");
			isLazy = true
		}
    if (file) {
			if(isLazy){
				lazyCount++;
			}
			performRequest(elmnt, file, isLazy);
			return;
		}
	}

	function performRequest(elmnt, file, isLazy){
		var date = new Date();
		$.ajax({
			url: file + "?" + date.getMilliseconds(),
			context: document.body
		}).done(function(data) {
			elmnt.innerHTML = data;
			var jsStartTagPos = data.indexOf("<script>");
			if(jsStartTagPos){
				jsStartTagPos += 8;
				var jsContent = data.substring(jsStartTagPos);
				var jsEndTagPos = jsContent.indexOf("</script>");
				jsContent = jsContent.substring(0, jsEndTagPos);
				if(isLazy){
					const prevElement = z[i-1];
					var onScrollListener = () => {
						if(isVisibleOrHasPassed($(prevElement)) && !isLazyLoaded){
							isLazyLoaded = true;
							eval(jsContent)
							document.removeEventListener('scroll', onScrollListener);
						}
					}
					document.addEventListener('scroll', onScrollListener);
					setTimeout(onScrollListener, 1000 * lazyCount);
				} else {
					eval(jsContent)
				}
			}
			elmnt.removeAttribute((isLazy ? "lazy-" : "") + "include-html");
			includeHTML();
		});
	}
}


function initPage(){
	$(window).on('load', function () {
		includeHTML();
	});
}