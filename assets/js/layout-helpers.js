/* globals $ */
'use strict'

var $scrollHint

$(function () {
  enableScrollHint()
})

function enableScrollHint () {
  $scrollHint = $('#scrollHint')
  $scrollHint.click(function (e) {
    e.preventDefault()
    $.smoothScroll({
      scrollTarget: $scrollHint.attr('href'),
      afterScroll: function () {
        window.location.href = $scrollHint.attr('href')
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
