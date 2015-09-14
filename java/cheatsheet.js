$(document).ready(function(){

$('li').mouseover(function() { 
	console.log( $(this) )

	$(this).find( "#p1" ).show();
	$(this).find( "#img1" ).hide();
});

$('li').mouseleave(function() { 
	console.log( $(this) )
	$(this).find( "#p1" ).hide();
	$(this).find( "#img1" ).show();
});


$('li').click(function() { 
	console.log( $(this) )

	$(this).find( "#p2" ).toggle();
	$(this).find( "#img2" ).toggle();
});

$('#button1').click(function() { 
	console.log( $(this) )

	$( "#p3" ).fadeIn();
	$( "#img3" ).fadeOut();
});

$('#button2').click(function() { 
	console.log( $(this) )

	$( "#p3" ).fadeOut();
	$( "#img3" ).fadeIn();
});

// $('li').click(function() { 
// 	console.log( $(this) )
// 	$(this).find( "#p2" ).hide();
// 	$(this).find( "#img2" ).show();
// });

});