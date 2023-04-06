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
      thanks = document.querySelector('.thanks')
      
headerBtn.addEventListener('click', function () {
  overlay.classList.toggle("hidden")
  feedbackForm.classList.toggle('hidden')
})
// feedbackBtn.addEventListener('click', function () {
//   thanks.classList.toggle('hidden-thanks')
//   feedbackForm.classList.toggle('hidden')
// })
overlay.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  feedbackForm.classList.toggle('hidden')
});
document.addEventListener('keydown', function (event) {
  if (event.key == "Escape" && !feedbackForm.classList.contains('hidden')) {
    overlay.classList.toggle("hidden");
    feedbackForm.classList.toggle('hidden')
  }
})