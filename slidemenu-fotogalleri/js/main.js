function showImg(thumb) {
    document.querySelector("#imgcontainer img").src = thumb.src.replace("thumb", "big");
};

function slideLeft() {
    var imgmenu = document.getElementById("imgmenucontainer");
    var imgmenuposition = imgmenu.offsetLeft;


    if (imgmenuposition > -170) {
        imgmenu.style.left = imgmenuposition - 5 + "px";
        setTimeout(slideLeft, 10);
    } else {
        document.getElementById("left").style.display = "none";
        document.getElementById("right").style.display = "inline";
    }

}

function slideRight() {
    var imgmenu = document.getElementById("imgmenucontainer");
    var imgmenuposition = imgmenu.offsetLeft;


    if (imgmenuposition < 0) {
        imgmenu.style.left = imgmenuposition + 5 + "px";
        setTimeout(slideRight, 10);
    } else {
        document.getElementById("left").style.display = "inline";
        document.getElementById("right").style.display = "none";
    }
}