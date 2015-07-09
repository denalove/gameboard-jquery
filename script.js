var main = function() {

	$('.more-btn').on('click', function( event ) {
		event.preventDefault();
	  $(this).next().toggle();
 });

	$('.share').on('click', function() {
	  $(this).next().toggle();
 });

	$('.notification').click(function() {
	  $(this).toggleClass('active');
  });

};

$(document).ready(main);