'use strict'

document.querySelector('header>button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s';
  document.querySelector('header').style.animationIterationCount = '1'
})
