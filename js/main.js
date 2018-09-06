$(document).ready(function(){
	carousel.init({target:'slideshow-mazarino', type:'fade'});

	$('.slideshow-btn-cocina').click(function() {
		carousel.init({target:'slideshow-cocina', type:'fade',autoscroll:true, hold: 10000});
		$('.fullscreen-cocina').fadeToggle(100);
	});

	$('.slideshow-btn-closet').click(function() {
		carousel.init({target:'slideshow-closet', type:'fade',autoscroll:true, hold: 10000});
		$('.fullscreen-closet').fadeToggle(100);
	});

	$('.slideshow-close').click(function() {
		$(this).parent().fadeToggle(100);
	});


});
