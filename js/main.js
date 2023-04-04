//burger
$('.burger').on('click', function (e) {
  e.preventDefault()
  $('.header__nav').toggleClass('header__nav--active')
  $('.header').toggleClass('burger--active')
})

