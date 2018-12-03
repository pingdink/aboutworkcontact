// Landing page js interactivity script for awc.html
// Author: Eric Anderson
// Date: created Nov 27, 2018
// Purpose: increase the height of the current div the mouse hovers on
// Requires: jquery 3.3.1


// rows containes the about, work and contact divs 
var rows = $(".item");

// each div has a click function
$("#item1 h1").click(function () {
    rows.get(0).css("height", "50vh");
});
   
    

