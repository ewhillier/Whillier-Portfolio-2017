$(document).ready(function() {
    
    $('#work-button').click(function () {
        $('#work-menu').removeClass('isHidden');
        $('#work-menu').addClass('infront');
        $('#work-menu').removeClass('behind');
        $('#about-menu').addClass('behind');
        $('#awards-menu').addClass('behind');
    });
    
    $('#about-button').click(function () {
        $('#about-menu').removeClass('isHidden');
        $('#about-menu').addClass('infront');
        $('#about-menu').removeClass('behind');
        $('#work-menu').addClass('behind');
        $('#awards-menu').addClass('behind');
    });
    
    $('#awards-button').click(function () {
        $('#awards-menu').removeClass('isHidden');
        $('#awards-menu').addClass('infront');
        $('#awards-menu').removeClass('behind');
        $('#work-menu').addClass('behind');
        $('#about-menu').addClass('behind');
    });
    
    $('#close-work').click(function () {
	    $('#about-menu').addClass('isHidden');
	    $('#work-menu').addClass('isHidden');
    });
    
    $('#close-about').click(function () {
	    $('#about-menu').addClass('isHidden');
	    $('#work-menu').addClass('isHidden');
    });
    
    $('#close-awards').click(function () {
	    $('#awards-menu').addClass('isHidden');
	    $('#about-menu').addClass('isHidden');
	    $('#work-menu').addClass('isHidden');
    });
    
});