'use strict';

let menu = document.querySelector(".menu"),
  menuItem = document.querySelectorAll(".menu-item"),
  item = document.querySelector(".menu-item"),
  adv = document.querySelector(".adv"),
  column = document.querySelectorAll(".column"),
  title = document.querySelector(".title"),
  li = document.createElement("li"),
  answer = document.getElementById("prompt"),
  qestion = prompt("Как вы относитесь к технике Apple?");

menu.appendChild(li);//добавления тега li в родительский элемент menu
li.classList.add("menu-item");//присваивание класса тегу
li.innerHTML = "Пятый пункт";//вставк твекста в тег

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";//смена картинки

title.textContent = "Мы продаем только подлинную технику Apple";//замена текста

column[1].removeChild(adv);//удаление рекламы

answer.textContent = qestion;//вставка текста ответа на поставленный вопрос
