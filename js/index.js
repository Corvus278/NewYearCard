function isPage(page) {
  const url = window.location.href
  return url[url.length - 1] == '/' ? page === 'index' : url.includes(`/${page}`)
}

function index() {
  let countClick = 0

  function mainBtn() {
    const btnCont = document.querySelector('.btn-container')
    const btnContHeight = btnCont.offsetHeight
    const btn = document.querySelector('.main-btn')
    const btnHeight = btn.offsetHeight
    const btnInitPos = (btnContHeight / 2) - (btnHeight / 2)

    function positionCalculate() {
      let pos
      switch (countClick) {
        case 0:
          pos = btnInitPos
          break
        case 1:
          pos = btnInitPos + btnHeight
          break
        case 2:
          pos = btnInitPos
          break
        case 3:
          pos = btnInitPos - btnHeight
          break
        case 4:
          pos = parseInt(btn.style.top) - btnHeight
          break
      }

      return `${pos}px`
    }

    function btnReplace() {
      btn.style.top = positionCalculate()
    }

    function btnChangeText() {
      btn.textContent = data.mainButtonText[countClick]
    }

    function btnEvent() {
      if (countClick == 5) {
        window.location.href = window.location.href + 'newYearCard'
      }
      else {
        btnReplace()
        btnChangeText()
        countClick++
      }
    }

    btnEvent()
    btn.addEventListener('click', btnEvent)
  }

  mainBtn()
}

(() => {
  console.log(isPage('index'))
  if (isPage('index')) {
    index()
    console.log(1)
  } else if (isPage('present')) {
    present()
  }
})()