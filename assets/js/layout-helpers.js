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

var $scrollHint

function checkScrollHint () {
  $scrollHint.toggleClass('hidden', window.scrollY > 200)
}

$(function () {
  $scrollHint = $('#scrollHint')
  $scrollHint.click(() => {
    $.smoothScroll({
      scrollTarget: $scrollHint.attr('data-href'),
      afterScroll: function () {
        window.location.hash = $scrollHint.attr('data-href')
      }
    })
  })

  const $boxes = $('.root-wrapper > section')
  const $body = $('body')
  const initialBackground = $body.css('background-color')

  // Setup
  $body.css('transition', 'background-color 500ms')
  $boxes.each(function (i) {
    $boxes.eq(i)
      .data('bgcolor', $boxes.eq(i).css('background-color'))
      .css('background-color', 'transparent')
  })

  function updateBackground () {
    // Assumes all blocks are 100vh tall
    let index = Math.floor(window.scrollY / window.innerHeight)
    $body.css('background-color', index ? $boxes.eq(index).data('bgcolor') : initialBackground)
  }

  // Set onscroll events
  document.onscroll = debounce(function () {
    updateBackground()
    checkScrollHint()
  }, 77)

  // Update initial state on load
  setTimeout(function () {
    updateBackground()
  }, 500)
})
