
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

// function hover(this) {
//     documnet.getElementsByClassName("blue").setAttribute("src", "images/read_more_blue.png");
// }

// function unhover(element) {
//     element.setAttribute("src", "images/read_more_yellow.png");
// }

