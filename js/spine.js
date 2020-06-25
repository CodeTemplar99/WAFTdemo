// side bar
let isOpen = false

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen

}



function showShopList() {
    document.querySelector('.hover-1').style.display = "block";
}
function hideShopList() {
    document.querySelector('.hover-1').style.display = "none";

}


function showResultList() {
    document.querySelector('.hover-2').style.display = "block";
}
function hideResultList() {
    document.querySelector('.hover-2').style.display = "none";

}


// slide
// var on = true;
// var myVar = setInterval(function () { if (on) { slides() } on = true; }, 7000);

// document.addEventListener("DOMContentLoaded", function (e) {
//     setInterval(
//         () => {
//             var l = document.getElementsByTagName("img")[0]
//             l.style.width = "0px";
//             l.style.opacity = 0;
//             l.style.transition = "opacity 3s";
//             var m = document.getElementsByTagName("img")[1]
//             m.style.width = "100%";
//             m.style.opacity = 1;
//             m.style.transition = "opacity 3s";
//             var slide = document.getElementsByTagName("img")[0];
//             document.getElementById("slide").appendChild(slide);

//         }, 7000
//     )
// });
