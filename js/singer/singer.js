$(document).ready(function(){
	$(".the-thumbnail").slick({
		fade:true,
        autoplay:true,
	});
	$(".slideOther").slick({
		slidesToShow : 4,
		autoplay:true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});