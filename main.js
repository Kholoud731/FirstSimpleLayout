
// search nav to show up 
$(".container .form i").hover(function(){
    $(".container .form input").animate({"width": "80%"}, 1000);
}, function(){
    $(".container .form input").animate({"width": "0%"}, 1000);
}
);

// show and hide the login option
$("#log-but").click(function(){
    $(".login-con").fadeIn(1000);

    });

$(".col-md-12 span").click(function(){
    console.log("close");
$(".login-con").fadeOut(1000);
});

// hover the nav bar 
$(".container .sub .links ul li").hover(function(){
    $(this).children().css("color", "#19c8fa");


}, function(){
    $(this).children().css({"color": "white",
    "position": "relative"
});

});

// show and hide the registeration option
$("#rig-but").click(function(){
    console.log("login");
    $(".signup-con").fadeIn(1000);

    });

$(".signup-form form span").click(function(){
    console.log("close");
$(".signup-con").fadeOut(1000);
});


$("div .zoom").hover(function(){
		
    $(this).addClass('transition');
    $(this).next().animate({"top":"+=25px"}, 1000).end();
}, function(){
    
    $(this).removeClass('transition');
    $(this).next().animate({"top":"-=25px"}, 1000).end();
});

function myFunction(){
    event.preventDefault();
}

// slider code

const sliderImages = $(".slider-container img"); 
var currentSlide = 1;
sliderImages[currentSlide - 1].className = "active";

$('#next').click (
    function (e) {
        if (currentSlide == sliderImages.length){
            $(this).css("opacity", "0.2");
            
            event.stopPropagation();

        }else{
            $('#prev').css("opacity", "1");
            currentSlide++;
            sliderImages.eq([currentSlide - 2]).slideUp(1000);
            sliderImages.eq([currentSlide - 1]).slideDown(1000);
    }
    });


$('#prev').click (
    
    function prevSlide(e) {
    if (currentSlide == 1){
        
        $(this).css("opacity", "0.2");
        event.stopPropagation();
    }else {
        $("#next").css("opacity", "1");
        currentSlide--;
        sliderImages.eq([currentSlide ]).slideUp(1000);
        sliderImages.eq([currentSlide - 1]).slideDown(1000);
}
}


);



