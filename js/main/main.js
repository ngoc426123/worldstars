$(document).ready(function(){
	$("#slideHome").slick({
		fade:true,
		dots:true,
	});
	$("#slideSinger").slick({
		slidesToShow : 3,
		autoplay:true,
		responsive: [
            {
                breakpoint:767,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint:365,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
	});
	$("#slideVideo").slick({
		slidesToShow : 3,
		autoplay:true,
		responsive: [
            {
                breakpoint:767,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint:365,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
	});
});