$(document).ready(function(){
    var currentPosition = 0;
    var slideWidth = window.screen.availWidth;
    var slides = $(".slider");
    var numberOfSlides = slides.length;
    var timer;
                
    $(".jumbotron").hover(
        function(){
        $("#leftControl").css("opacity", 0.8);
        $("#rightControl").css("opacity", 0.8);
        },
        function(){
            $("#leftControl").css("opacity", 0);
            $("#rightControl").css("opacity", 0);
        }
    );
    slides.wrapAll("<div id='slideInner'></div>").css({"float":"left", "width":slideWidth});
    $("#slideInner").
        //css('width', slideWidth * numberOfSlides);
        //width(slideWidth*numberOfSlides);
        css("width", slideWidth * numberOfSlides);            
    $(".slidewrapper")
        .prepend("<span class='control' id='leftControl'></span>")
        .append("<span class='control' id='rightControl'></span>");
    manageControls(currentPosition);
                
    timer = setInterval(slide, 5000);
                
    $(".control").mouseout(function(){
        timer = setInterval(slide, 5000);
    });
                
                $(".control").bind('click', function(){//try just 'click' handler
                    currentPosition = ($(this).attr('id') == 'rightControl') ? currentPosition+1 : currentPosition-1;
                    manageControls(currentPosition);
                    $("#slideInner").animate({marginLeft: slideWidth * (-currentPosition)});//.data('current', currentPosition);
                    clearInterval(timer);
                });
                //не прокручує, бо залежить від currentPosition, а воно = 0;
                function slide(){
                    if(currentPosition === numberOfSlides){
                        $("#slideInner").animate({marginLeft: 0});
                        $("#leftControl").hide();
                        $("#rightControl").hide();
                        $("#rightControl").show();
                        currentPosition = 0;
                    }
                    else if(currentPosition === 0){
                        $("#rightControl").show();
                        $("#slideInner").animate({marginLeft: -slideWidth}, 1500);
                        $("#leftControl").show();
                        currentPosition++;
                    }
                    else if(currentPosition === numberOfSlides - 1){
                        $("#slideInner").animate({marginLeft: slideWidth * (-currentPosition)}, 1500);
                        $("#rightControl").hide();
                        currentPosition++;
                    }
                    else{
                        $("#slideInner").animate({marginLeft: slideWidth * (-currentPosition)}, 1500);
                        currentPosition++;
                    }
                }
                function manageControls(position){
                    if(position == 0){
                        $("#leftControl").hide();
                    }
                    else{
                        $("#leftControl").show();
                    }
                    if(position == numberOfSlides - 1){
                        $("#rightControl").hide();
                    }
                    else{
                        $("#rightControl").show();
                    }
                }
});
