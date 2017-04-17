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

  // Setup
  $boxes.each(function () {
    $(this)
      .data('bgcolor', $(this).css('background-color'))
      .css('background-color', 'transparent')
  })
  $body.css('transition', 'background-color 500ms')

  function updateBackground () {
    // Replace with for loop to be able to break out on first match
    $boxes.each(function () {
      let $box = $(this)
      if ($box.offset().top >= window.scrollY) {
        $body.css('background-color', $box.data('bgcolor'))
        return false
      }
    })
  }

  const cb = debounce(updateBackground, 175)
  document.onscroll = cb
})
