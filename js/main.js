"use strict"
//burger
$('.burger').on('click', function (e) {
  e.preventDefault()
  $('.header__nav').toggleClass('header__nav--active')
  $('.header').toggleClass('burger--active')
})

//feedback-form
const feedbackForm = document.querySelector('.form-inner'),
      headerBtn = document.querySelector('.header__body-btn'),
      overlay = document.querySelector('.overlay'),
      feedbackBtn = document.querySelector('.feedback-form__btn'),
      close = document.querySelector('.form-close'),
      thanks = document.querySelector('.thanks'),
      thanksClose = document.querySelector('#thanks-close-btn')
      
headerBtn.addEventListener('click', function () {
  overlay.classList.toggle("hidden")
  feedbackForm.classList.toggle('hidden')
})
document.addEventListener('keydown', function (event) {
  if (event.key == "Escape" && !feedbackForm.classList.contains('hidden')) {
    overlay.classList.toggle("hidden")
    feedbackForm.classList.toggle('hidden')
  }
})
close.addEventListener("click", function () {
  overlay.classList.toggle("hidden")
  feedbackForm.classList.toggle('hidden')
});
feedbackBtn.addEventListener('click', function (e) {
  e.preventDefault();
  thanks.classList.toggle('hidden-thanks')
  feedbackForm.classList.toggle('hidden')
})
document.addEventListener('keydown', function (event) {
  if (event.key == "Escape" && !thanks.classList.contains('hidden-thanks')) {
    overlay.classList.toggle("hidden")
    thanks.classList.toggle('hidden-thanks')
  }
})
thanksClose.addEventListener("click", function () {
  overlay.classList.toggle("hidden")
  thanks.classList.toggle('hidden-thanks')
});
overlay.addEventListener("click", function () {
  if(feedbackForm.classList.contains('hidden') && !thanks.classList.contains('hidden-thanks')) {
    overlay.classList.toggle("hidden")
    thanks.classList.toggle('hidden-thanks')
  } else {
    overlay.classList.toggle("hidden")
    feedbackForm.classList.toggle('hidden')
  }  
});