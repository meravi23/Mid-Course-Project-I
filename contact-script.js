// function validateForm() {
//     // alert("hi");
//     var x = document.getElementById("fname").value;
//     // alert(x);

    

//     if (x == "") {
//         // alert("required");
//         document.getElementById("rq-fname").style.display = "block";
//     }
// }

// var eml = document.getElementById("email");

// eml.addEventListener("keyup", function(event) {
//     if (eml.validity.typeMismatch) {
//         eml.setCustomValidity("קלט לא מתאים");
//     } else {
//         eml.setCustomValidity("");
//     }
// });

function changeImgOn() {
    var image = document.getElementById("icon");
    image.src = "images/menu_home_blue.png";
}

function changeImgBack() {
    var image = document.getElementById("icon");
    image.src = "images/menu_home_black.png";
}
