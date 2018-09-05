$(document).ready(function(){
	carousel.init({target:'slideshow-mazarino', type:'fade'});
	carousel.init({target:'slideshow-cocina', type:'fade',autoscroll:true});
	carousel.init({target:'slideshow-closet', type:'fade',autoscroll:true});

	$('.slideshow-btn-cocina').click(function() {
		$('.fullscreen-cocina').fadeToggle(100);
	});

	$('.slideshow-btn-closet').click(function() {
		$('.fullscreen-closet').fadeToggle(100);
	});

	$('.slideshow-close').click(function() {
		$(this).parent().fadeToggle(100);
	});


});
