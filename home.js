//logout//
let logOutBtn = document.querySelector(".button");

logOutBtn.addEventListener("click", enter);

function enter() {
  window.open("index.html", "_self");
}

//colorbuttons//
//infoside//
let infoBtn = document.querySelector(".item1");

infoBtn.addEventListener("click", enter1);

function enter1() {
  window.open("info.html", "_self");
}

//scheduleside//
let scheduleBtn = document.querySelector(".item2");

scheduleBtn.addEventListener("click", enter2);

function enter2() {
  window.open("schedule.html", "_self");
}

//message//
let messageBtn = document.querySelector(".item3");

messageBtn.addEventListener("click", enter3);

function enter3() {
  window.open("message.html", "_self");
}

//Documents//
let documentsBtn = document.querySelector(".item4");

documentsBtn.addEventListener("click", enter4);

function enter4() {
  window.open("document.html", "_self");
}

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

function enter5() {
  window.open("info.html", "_self");
}

//schedule//
let scheduleBtn1 = document.querySelector(".schedule");

scheduleBtn1.addEventListener("click", enter6);

function enter6() {
  window.open("schedule.html", "_self");
}


//message//
let messageBtn1 = document.querySelector(".message");

messageBtn1.addEventListener("click", enter7);

function enter7() {
  window.open("message.html", "_self");
}


//document//
let documentsBtn1 = document.querySelector(".documents");

documentsBtn1.addEventListener("click", enter8);

function enter8() {
  window.open("document.html", "_self");
}


//logout//
let logOutBtn1 = document.querySelector(".logout");

logOutBtn1.addEventListener("click", enter9);

function enter9() {
  window.open("index.html", "_self");
}
