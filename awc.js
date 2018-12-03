// Landing page js interactivity script for awc.html
// Author: Eric Anderson
// Date: created Nov 27, 2018
// Purpose: increase the height of the current div the mouse hovers on
// Requires: jquery 3.3.1


// rows containes the about, work and contact divs
var rows = $(".item");

// each div has a click function
$("#item1 h1").click(function () {
});

$(".item").click(function () {
    // add add styles to other rows of landing page
    $(this).addClass("nav-slide");
    $(".heading h1", this).addClass("nav-slide-item-h1");
    $(".heading h1").addClass("nav-slide-h1");

    // when item one is clicked add beige bottom border
    if($(this).attr("id") === "item1") {
        $("#item1 .heading h1").css("border-bottom", "1px solid antiquewhite");
        console.log("trig");

        //need to set the heights of the bottom rows
        // jquery obj using vanilla js
        rows.get(1).classList.add("home-height-fix");
        rows.get(2).classList.add("home-height-fix");
    }
});
/*
, function() {
    // remove the classes
    $(this).removeClass("nav-slide");
    $(".heading h1", this).removeClass("nav-slide-item-h1");
    $(".heading h1").removeClass("nav-slide-h1");

});
*/
