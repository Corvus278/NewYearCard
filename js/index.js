let owner

function isPage(page) {
  const url = window.location.href
  return url[url.length - 1] == '/' ? page === 'index' : url.includes(`/${page}`)
}

function index() {
  let countClick = 0;

  (() => {
    const search = new URLSearchParams(window.location.search)
    if (search.get('owner')) {
      owner = data.createOwner(search.get('owner'))
    }
  })()

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
        window.location.href = 'newYearCard.html' + window.location.search
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

// Осторожно, говонокод, вермени было мало)
function newYearCard() {
  let clickCount = 0
  const btn = document.querySelector('.tree-button')
  const treeNoLight = document.querySelector('.tree--no-light')
  const treeLight = document.querySelector('.tree--light')
  const textContent = document.querySelector('.text-cont')
  const geraltImg = document.querySelector('.geralt-img');

  (() => {
    const search = new URLSearchParams(window.location.search)
    if (search.get('owner')) {
      owner = data.createOwner(search.get('owner'))
    }
  })()

  function btnChangeText() {
    btn.textContent = data.treeButtonText[clickCount]
  }

  function btnChangeColor() {
    btn.style.background = data.treeButtonColor[clickCount]
  }

  function lightTree() {
    treeNoLight.classList.add('none')
    treeLight.classList.remove('none')
  }

  function begin() {
    lightTree()

    setTimeout(() => {
      document.querySelector('.happy-new-year').classList.remove('opacity')
      document.title = 'С новым годом!!!'
    }, 1000)

    if (owner) {
      setTimeout(() => {
        document.querySelector('.receiver').classList.remove('opacity')
      }, 1700)
      document.querySelector('.receiver').textContent = `${owner}))`
      textContent.style.marginBottom = " 25px"
    }

    setTimeout(() => {
      geraltImg.style.transform = 'none'
    }, 2000)
  }

  function click() {
    if (clickCount === 5) {
      begin()
      btn.classList.add('none')
    }
    btnChangeText()
    btnChangeColor()
    clickCount++
  }

  click()
  btn.addEventListener('click', click)
}

(() => {
  if (isPage('index')) {
    index()
    console.log(1)
  } else if (isPage('newYearCard')) {
    newYearCard()
  }
})()