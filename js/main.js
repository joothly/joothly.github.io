// hand

const _hand = document.querySelector('.hand-button')
const activeClass = 'page--active'

_hand.addEventListener('click', () => {
  const _pageIntro = document.querySelector('.page--intro')
  const _pageHome = document.querySelector('.page--home')

  _pageIntro.classList.remove(activeClass)
  _pageHome.classList.add(activeClass)
})

// easter egg

const _y = document.querySelector('.title__letter--y')

_y.addEventListener('click', () => {
  window.open('http://febley.me', '_blank')
})
