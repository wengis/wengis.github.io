const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if (revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealR);
function revealR() {
    var reveals = document.querySelectorAll('.reveal-r');
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if (revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealB);
function revealB() {
    var reveals = document.querySelectorAll('.reveal-b');
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 250;

        if (revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

hamburger.addEventListener('click', zmenaPozadi);

function zmenaPozadi() {
    var pozadi = document.querySelector(".picture-container");
    if (pozadi.style.background = "red;") {
        console.log("jde?");
        pozadi.style.background = "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(barber-seats.jpg)";
        pozadi.style.backgroundSize = "cover";
    } else {
        pozadi.style.background = "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(barberman.jpg)";
    }
}
