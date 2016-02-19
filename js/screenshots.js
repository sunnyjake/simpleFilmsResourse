function showImage(id, state) {
    document.getElementById(id).style.display = state;
    document.getElementById("back").style.display = state;
    document.getElementById("close_img").style.display = state;
}
function closeAllImages() {
    var elementsToHide = document.getElementsByClassName("hided");
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
    }
    document.getElementById("back").style.display = "none";
}
function getEscape(event) {
    if (event.keyCode === 27) {
        var hidedElements = document.getElementsByClassName("hided");
        for (var i = 0; i < hidedElements.length; i++) {
            hidedElements[i].style.display = "none";
        }
        document.getElementById("back").style.display = "none";
    }
}
function changeScreen(nowId, id) {
    document.getElementById(nowId).style.display = "none";
    document.getElementById(id).style.display = "block";
}
$(document).ready(function () {
    $('#menu').accordion({collapsible: true, active: 1});
    $(".img-rounded").hover(
            function () {
                $(this).css("opacity", 0.7);
            },
            function () {
                $(this).css("opacity", 1);
            });

    $(window).scroll(function () {
        var s = $(document).scrollTop();
        if (s > 5) {
            $(".nav").hide();
        }
        if (s < 5) {
            $(".nav").show();
        } else if (s < 775) {
            $("#menu").css("position", "static");
        }
    });
});
