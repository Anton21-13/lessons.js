'use strict';

let menu = document.querySelector(".menu"),
  item = document.querySelector(".menu-item"),
  adv = document.querySelector(".adv"),
  column = document.querySelectorAll(".column");


document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";

let li = document.createElement("li");

li.classList.add("menu-item");

li.innerHTML = "Пятый пункт";
menu.appendChild(li);
console.log(li);
column[1].removeChild(adv);