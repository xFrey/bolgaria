$(document).ready(function(){
 	$('.slider').slick({
        dots: true,
		infinite: true,
		arrows: true,
		edgeFriction: 0.15,
		prevArrow: '<i class="fa fa-angle-left reviews__block_angle-left" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-angle-right reviews__block_angle-right" aria-hidden="true"></i>',
    });
});