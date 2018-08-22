/*The script for the mobile menu
show/hide the top menu when clicking on the button
 (the menu height is switched from zero to its content
*/
$(document).ready (function(){
	$('.nav-toggle').on('click',function(){
		$('#menu').toggleClass('active');
	});
});