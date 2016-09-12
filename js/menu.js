var menuPopUpOpen = function () {
    "use strict";
    var blurBg = document.getElementById("blur");
    var pMenu = document.getElementById("pop-up");
    
    pMenu.style.transform = "translate(0px,0px)";  
    blurBg.style.visibility = "visible";
    blurBg.style.opacity = "1";
};

var menuPopUpClose = function () {
    "use strict";
    var blurBg = document.getElementById("blur");
    var pMenu = document.getElementById("pop-up");
 
    pMenu.style.transform = "translate(-250px,0)";
    blurBg.style.visibility = "hidden";
    blurBg.style.opacity = "0";
};