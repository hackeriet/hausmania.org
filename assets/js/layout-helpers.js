/* globals $ */
'use strict'

var $scrollHint

$(function () {
  // If theres a video on top, it's probably the front page
  if ($('#top video').length) {
    enableScrollHint()
  }
})

function enableScrollHint () {
  $scrollHint = $('#scrollHint')
  $scrollHint.click(function () {
    $.smoothScroll({
      scrollTarget: $scrollHint.attr('data-href'),
      afterScroll: function () {
        window.location.hash = $scrollHint.attr('data-href')
      }
    })
  })

  // Set onscroll events
  document.onscroll = debounce(function () {
    checkScrollHint()
  }, 77)
}

function checkScrollHint () {
  $scrollHint.toggleClass('hidden', window.scrollY > 200)
}

function debounce (fn, delay) {
  var timeout
  return function () {
    var args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.apply(null, args)
      timeout = null
    }, delay || 1000)
  }
}
