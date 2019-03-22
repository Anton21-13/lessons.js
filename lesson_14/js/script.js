$(document).ready(() => {
  'use strict';

  function openModal() {
    $('.overlay').fadeIn(1000);
    $('.modal').slideDown(1000);
  }

  function closeModal() {
    $('.overlay').fadeOut(1000);
    $('.modal').slideUp(1000);
  }

  $('a[href="#sheldure"], .main_btna, .main_btn').on('click', openModal);

  $('.close').on('click',closeModal);

});

