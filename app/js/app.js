'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();




$(document).ready(function() {

  $( '#navtoggle' ).change(function() {
    $('.pageheader').toggleClass('js-menus-are-open');
  });

  $('#owl-photostrip').owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : false,
    navigationText:  ['<','>'],
    pagination: false,
    autoHeight : true
  });

  $('#owl-namecards').owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigation:false,
      pagination:true,
      // responsive:{
      //   0:{
      //       items:1,
      //       //nav:true
      //   },
      // }
      //transitionStyle : 'fade'

      // 'singleItem:true' is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  $('#owl-homeslider').owlCarousel({

      //navigation : true, // Show next and prev buttons
      pagination : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight : true,
      //transitionStyle: 'fade',
      autoPlay : true,
      stopOnHover : true,
      // responsive:{
      //   0:{
      //       items:1,
      //       //nav:true
      //   },
      // }

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  var $setagrid = $('.setagrid').isotope({
    itemSelector: '.masonry__elem',
    layoutMode: 'masonry'
  });

  $('.tagselect').on( 'change', function() {
    var filterValue = this.value;
    $setagrid.isotope({ filter: filterValue });
  });



});