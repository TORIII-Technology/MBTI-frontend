var container, pageInner, Head
var winW = window.innerWidth

function init() {
  container = document.getElementById('page_container')
  Head = document.querySelector('header')

  imagesLoaded(container, function (instance) {
    document.body.classList.add('loaded')
    //banner slide效果
    const imgs = document.querySelectorAll('.slide_img')
    let currentImgIndex = 0

    if (winW < 568) {
      imgs[0].src = './img/mv_idols_mobile.webp'
    }
    imgs[currentImgIndex].style.opacity = 0
    setTimeout(() => {
      imgs[0].style.opacity = 1
      imgs[1].style.opacity = 0
      timerId = setInterval(() => {
        imgs[currentImgIndex].style.opacity = 0
        currentImgIndex = (currentImgIndex + 1) % imgs.length
        imgs[currentImgIndex].style.opacity = 1
      }, 5000)
    }, 2000)
  })

  //SCROLL控制menu樣式
  let lastScroll = ''
  const GAP = 80
  let threshold = 0
  let headerWrap = document.querySelector('.head_wrap')
  let navopen = document.getElementById('navopen')

  window.addEventListener('scroll', function (e) {
    let scrollY = window.scrollY

    if (scrollY > 400) {
      headerWrap.classList.remove('on_top')
    } else {
      headerWrap.classList.add('on_top')
    }

    const direction = scrollY < lastScroll ? -1 : scrollY > lastScroll ? 1 : 0
    const isNavShow = document.body.classList.contains('show_nav')

    if (direction == 1) {
      if (isNavShow) {
        if (scrollY > GAP) {
          document.body.classList.remove('show_nav')
          threshold = lastScroll + GAP
        }
      } else {
        threshold = lastScroll - GAP
      }
    } else if (direction == -1) {
      if (scrollY <= threshold || scrollY < GAP) {
        if (!isNavShow) {
          document.body.classList.add('show_nav')
          threshold = lastScroll - GAP
        }
      }
    }
    lastScroll = scrollY
  })

  //menu手機版樣式
  let nav = document.getElementById('navopen')
  nav.addEventListener('click', function () {
    if (Head.classList.contains('opennav')) {
      Head.classList.remove('opennav')
      navopen.classList.add('on_top')
    } else {
      Head.classList.add('opennav')
      navopen.classList.remove('on_top')
    }
  })

  let navLiAry = document.querySelectorAll('#logo_ul li')
  navLiAry.forEach((li) => {
    li.addEventListener('click', function () {
      if (Head.classList.contains('opennav')) {
        Head.classList.remove('opennav')
        navopen.classList.add('on_top')
      } else {
        Head.classList.add('opennav')
        navopen.classList.remove('on_top')
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  init()
})
