
var eventClick = 'click';
var eventHover = 'mouseover mouseout';


jQuery(document).ready(function($) {

	/**
	*
	* Touch Gestures
	*        &
	* Hover and Animation Triggers
	*
	**/

	/* Hover Effects */

	$('.portfolio-grid article a, .button, button, input[type="submit"], input[type="reset"], input[type="button"], #header a, .header-button, #nav-container a, .nav-child-container, .gallery-container a, #ps-custom-back').bind(eventHover, function(event) {
		$(this).toggleClass('hover');
	});

	/* Sidebar multi-level menu */
	
	$('.nav-child-container').bind(eventClick, function(event) {
		event.preventDefault();
		var $this = $(this);
		var ul = $this.next('ul');
		var ulChildrenHeight = ul.children().length * 46;

		if(!$this.hasClass('active')){
			$this.toggleClass('active');
			ul.toggleClass('active');
			ul.height(ulChildrenHeight + 'px');
		}else{
			$this.toggleClass('active');
			ul.toggleClass('active');
			ul.height(0);
		}
	});

	/* Sidebar Functionality */
		
	$('#menu-trigger').bind(eventClick, function(event) {
		$('#content-container').toggleClass('active');
		$('#sidemenu').toggleClass('active');
		setTimeout(function() {
			$('#sidemenu-container').toggleClass('active');
		}, 500);
	});
		
	$('.nav a').bind('click', function(event) {
		event.preventDefault();
		var path = $(this).attr('href');
		$('#content-container').toggleClass('active');
		$('#sidemenu').toggleClass('active');
		setTimeout(function() {
			window.location = path;
		}, 500);
	});

	/* Swipe menu support */
		
	$('.touch-gesture #content').hammer().on('swiperight', function(event) {
		$('#content-container').addClass('active');
		$('#sidemenu').addClass('active');
		setTimeout(function() {
			$('#sidemenu-container').addClass('active');
		}, 500);
	});
		
	$('.touch-gesture #content').hammer().on('swipeleft', function(event) {
		$('#content-container').removeClass('active');
		$('#sidemenu').removeClass('active');
		setTimeout(function() {
			$('#sidemenu-container').removeClass('active');
		}, 500);
	});

	/**
	*
	* Flexslider
	*
	**/

	var $flexsliderContainer = $('.flexslider');

	if($flexsliderContainer.length > 0){
		$flexsliderContainer.flexslider({
			controlsContainer: ".flexslider-controls",
			prevText: '<span class="icon-left-open-big"></span>',
			nextText: '<span class="icon-right-open-big"></span>',
			slideshowSpeed: 5000,
			animationSpeed: 600,
			slideshow: true,
			smoothHeight: false,
			animationLoop: true,
		});
	}




if( document.getElementById('map-container-api') != null){

	google.maps.visualRefresh = true;

	/* Set Latitude and longitude for your google maps center and marker */

	var mapLatitude  = idLAT;
/*	alert(mapLatitude)*/
	var maplongitude = idLON;
/*	alert(maplongitude)*/


	var map;
	var mapContainer = document.getElementById('map-container-api');
	var mapMarker = new google.maps.LatLng(mapLatitude, maplongitude);

	function initialize() {
		var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(mapLatitude, maplongitude),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			<!--disableDefaultUI: true,-->
		};

		map = new google.maps.Map(mapContainer, mapOptions);
		
		var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="fuente1">Recorrer los alrededores</h1>'+
      '<div id="bodyContent">'+
      '<p>Visualice las avenidas, calles, sitios y cercanías de este <b>proyecto</b></p>'+
      '</div>'+
      '</div>';
	  
	  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

		var marker = new google.maps.Marker({
			position: mapMarker,
		    animation: google.maps.Animation.DROP,
			map: map,
			flat: true,
			tite: 'Restart Inc.'
		});
		google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
	}
	

	google.maps.event.addDomListener(window, 'load', initialize);

}


	$('form').h5Validate();
});

