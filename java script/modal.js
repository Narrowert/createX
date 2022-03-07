/* First */
var btnModal = document.getElementById("open__first");
var modal1 = document.querySelector(".modal--1");
var span = document.querySelector(".close");

btnModal.onclick = function () {
    modal1.style.display = "block";
}

span.onclick = function () {
    modal1.style.display = "none";
}
 
 window.onclick = function (event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}

/* Second */
var btnModal2 = document.getElementById("open__second");
var modal2 = document.querySelector(".modal--2");
var span2 = document.querySelector(".close__second");

btnModal2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}
 
 window.onclick = function (event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}