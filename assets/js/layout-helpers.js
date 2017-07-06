function debounce (fn, delay) {
  let timeout
  return function () {
    const self = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.apply(self, arguments)
      delete timeout
    }, delay || 1000)
  }
}

$(function () {
  const $boxes = $('#wrapper > section')
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

  const cb = debounce(updateBackground, 175)
  document.onscroll = cb

  // Update initial state on load
  setTimeout(function () {
    updateBackground()
  }, 500)
})
