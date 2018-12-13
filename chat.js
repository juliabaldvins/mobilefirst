
//sidenav//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//sidenavbuttons//

//home//
let homeBtn1 = document.querySelector(".home");

homeBtn1.addEventListener("click", enter10);

function enter10() {
  window.open("home.html", "_self");
}

//info//
let infoBtn1 = document.querySelector(".info");

infoBtn1.addEventListener("click", enter5);
function enter5(){
    window.open("info.html", "_self");
}

//schedule//
let scheduleBtn1 = document.querySelector(".schedule");

scheduleBtn1.addEventListener("click", enter6);
function enter6(){
    window.open("schedule.html", "_self");
}


//message//
let messageBtn1 = document.querySelector(".message");

messageBtn1.addEventListener("click", enter7);
function enter7(){
    window.open("message.html", "_self");
}


//document//
let documentsBtn1 = document.querySelector(".documents");

documentsBtn1.addEventListener("click", enter8);
function enter8(){
    window.open("document.html", "_self");
}

//logout//
let logOutBtn1 = document.querySelector(".logout");

logOutBtn1.addEventListener("click", enter9);
function enter9(){
    window.open("index.html", "_self");
}
//chat//
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//Message//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
