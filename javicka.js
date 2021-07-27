// --------------------- Short functions -----------------------//

function myStar(){
    document.getElementById("star").innerHTML = "★";
}

function myStar2(){
    document.getElementById("star").innerHTML = "☆";
}

function image1() {
    document.getElementById("first-doublebox").innerHTML = "((:";
}

function image2() {
    document.getElementById("sec-doublebox").innerHTML = ":))";
}

function topFunction(){
    document.documentElement.scrollTop = 0;
}

function confirmCopy() {
    var copyIcon = document.getElementById('copytext');
    console.log(copyIcon);
}
// ---------------------     -----------------------//

/// ------------------ challenge IconCopy ------------------//

function Iconcopy() {
    document.getElementById('copytext').innerHTML = "<i class='far fa-check-circle'></i>";
    
}

function Iconcopy2() {
    document.getElementById('copytext2').innerHTML = "<i class='far fa-check-circle'></i>";
    
}

document.addEventListener('change', restartcopy);

function restartcopy() {
    document.getElementById('copytext').innerHTML = "<i class='far fa-clone'></i>"; 
}

document.addEventListener('change', restartcopy2);

function restartcopy2() {
    document.getElementById('copytext2').innerHTML = "<i class='far fa-clone'></i>";
}

// ---------------------     -----------------------//


////-----------------------PhoneXcomputer-------------------------//

//retez[5] = "Typical RGB output is phone display.";
//document.addEventListener("resize", chainChange);
 

function pageResize() {
    var w = window.outerWidth;
    if (w < 551) {
        retez[5] = "Typical RGB output is phone display.";
        console.log(retez[5]);
    }  else {
        retez[5] = "Typical RGB output is computer display.";
    }
  }
  // ---------------------     -----------------------//


////------------------------ARRAY--------------------------------//

var retez = ["RGB model is an additive color model.",
"Three primary colors are added together.", 
"The total number of bits is used. ", 
"Display of images in electronic systems.", 
"Typical RGB input is digital camera.", 
"Typical RGB output is computer display.", 
"Different devices different RGB value.", 
"↓ ↓ Try it ↓ ↓"];

var counter = 0;

function zmenickatextu() {
    document.getElementById("popismain").innerHTML = retez[counter];
    counter++;
    if (counter >= retez.length) {
        counter = 0;
    }
    console.log(counter);
}

setInterval(zmenickatextu, 4500);


//DONE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :-)


function hideDiv() {
   var x = document.getElementById("mydiv");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}

function changeColor() {
    var pagebox = document.getElementById("pagebox");
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    document.getElementById("value1").value = x;
    document.getElementById("value2").value = y;
    document.getElementById("value3").value = z;
    var thergb = "rgb(" + x + "," + y + "," + z + ")";
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    document.getElementById("value4").value = x;
    document.getElementById("value5").value = y;
    document.getElementById("value6").value = z;
    var thergb2 = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById("rgb-p1").innerHTML = thergb;
    document.getElementById("rgb-p2").innerHTML = thergb2;
    pagebox.style.background = "linear-gradient(to left top," + thergb2 + "," + thergb + ")";
    document.getElementById("blackdivtop1").style.background = "linear-gradient(to left top," + thergb2 + "," + thergb + ")";
    document.getElementById("blackdivtop2").style.background = "linear-gradient(to left top," + thergb2 + "," + thergb + ")";
    document.getElementById("blackdivtop3").style.background = "linear-gradient(to left top," + thergb2 + "," + thergb + ")";
}

// update instant zobrazeni hodnoty pri pohybu (levo/pravo) $("#").on("input change", function obarvit() {});

document.addEventListener("change", obarvit);
function obarvit() {
    var red1 = document.getElementById("value1").value;
    var green1 = document.getElementById("value2").value;
    var blue1 = document.getElementById("value3").value;
    document.getElementById("rgb-p1").innerHTML = "rgb("+ red1 + "," + green1 + "," + blue1 + ")";
    var red2 = document.getElementById("value4").value;
    var green2 = document.getElementById("value5").value;
    var blue2 = document.getElementById("value6").value;
    document.getElementById("rgb-p2").innerHTML = "rgb("+ red2 + "," + green2 + "," + blue2 + ")";
    pagebox.style.background = "linear-gradient(to left top, rgb("+ red2 + "," + green2 + "," + blue2 + ")" + "," + "rgb("+ red1 + "," + green1 + "," + blue1 + ")";
    document.getElementById("blackdivtop1").style.background = "linear-gradient(to left top, rgb("+ red2 + "," + green2 + "," + blue2 + ")" + "," + "rgb("+ red1 + "," + green1 + "," + blue1 + ")";
    document.getElementById("blackdivtop2").style.background = "linear-gradient(to left top, rgb("+ red2 + "," + green2 + "," + blue2 + ")" + "," + "rgb("+ red1 + "," + green1 + "," + blue1 + ")";
    document.getElementById("blackdivtop3").style.background = "linear-gradient(to left top, rgb("+ red2 + "," + green2 + "," + blue2 + ")" + "," + "rgb("+ red1 + "," + green1 + "," + blue1 + ")";
}



//scrolling effects

//(notepad-scrollOpacity)


// REVEAL

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

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
        var revealpoint = 150;

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
        var revealpoint = -5;

        if (revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll', reveal2);
v = window.outerWidth;
if (v > 551) {
    function reveal2() {
        var reveals = document.querySelectorAll('.reveal2');
        console.log(reveals);
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
    
            if (revealTop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        } 
    } 

    function reveal2() {
        var reveals = document.querySelectorAll('.reveal3');
        console.log(reveals);
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
    
            if (revealTop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }

    function reveal2() {
        var reveals = document.querySelectorAll('.reveal4');
        console.log(reveals);
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
    
            if (revealTop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
} else {
    reveals[i].classList.remove('active');
}

window.addEventListener('scroll', revealPicture);

function revealPicture() {
    var reveals = document.querySelectorAll('.reveal-picture');
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}



function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

