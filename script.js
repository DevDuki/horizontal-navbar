const navItems = document.querySelectorAll('.nav-item-container')
const navIcons = document.querySelectorAll('.dot.main')

navIcons.forEach(navIcon => {

  navIcon.addEventListener('click', (e) => {
    const navIconId = e.currentTarget.id

    navItems.forEach(item => {

      const currentActive = item.classList.contains('active')

      if(currentActive) {
        item.classList.remove('active')
        const subnav = item.querySelector('.subnav')

        // Ziel Container has no subnav
        if(!subnav) return

        subnav.classList.remove('slide-in')
        subnav.classList.add('slide-out')
      }

      const itemId = item.id

      if(itemId.includes(navIconId)){
        item.classList.add('active')
        const subnav = item.querySelector('.subnav')

        // Ziel Container has no subnav
        if(!subnav) return

        subnav.classList.remove('slide-out')
        subnav.classList.add('slide-in')
      }

      // const subnav = item.querySelector('.subnav')
      // if(subnav) subnav.classList.add('slide-in')
    })
  })
})




// Determining the length of each subnav, by calculating remaining length

const nav = document.querySelector('nav')
const allNavItemContainers = Array.from(document.querySelectorAll('.nav-item-container'))

const zielContainer = allNavItemContainers.pop() // Removing the "Ziel" Container which has to be handles seperately

// Calculates and returns the lengths other subnavs can take up
const getRatios = (containerElement) => {
  const totalLength = nav.clientWidth
  console.log('totalLength', totalLength)

  console.log('containerWidt', lengthData[containerElement.id])
  const containerInitialWidth = parseInt(lengthData[containerElement.id].hisLength.slice(0, -2))
  console.log('containerInitialWidt', containerInitialWidth)
  const remainingLengthTotal = totalLength - containerInitialWidth
  //containerElement.clientWidth - 15

  const remainingLengthEachMainDot = remainingLengthTotal / 4

  console.log('remainingLengthEachDot', remainingLengthEachMainDot)
  return remainingLengthEachMainDot
}

/**
 * Create an object containing all containers' original width and what other container's width should be (in px)
 *
 * returns:
 * {
      immobilie-container : {
        hisLength: '120px',
        othersLength: '35px'
      },
      kreditnehmer-container: {...},
      ...
    }
 */
const lengthData = {}

// Setting the inital lengths of each navItemContainer. Only has to be done once, hence using IIFE (semicolon in the beginnning is mandatory here)
;(() => {
  allNavItemContainers.forEach((container) => {
    lengthData[container.id] = {
      hisLength: container.clientWidth + 'px'
    }
  })
})()

// Adds the lengths of all other navItemContainer to lenghData. (updates them when window is resized)
const updateLengthData = () => {

  allNavItemContainers.forEach((container) => {

    const remainingWidths = getRatios(container)

    console.log('remainingWidths', remainingWidths)

    lengthData[container.id] = {
      othersLength: remainingWidths + 'px',
      ...lengthData[container.id]
    }
  })

  lengthData[zielContainer.id] = {
    hisLength: zielContainer.style.width,
    othersLength: nav.style.width / 5
  }

  console.log('lengthData', lengthData)
}
updateLengthData()


// Adding functionality to the click event listener, to adjust the widths
navIcons.forEach((navIcon) => {
  navIcon.addEventListener('click', (e) => {

    const navIconId = e.currentTarget.id

    const containerToSetActive = Array.from(navItems).filter((item) => item.id.includes(navIconId))[0]

    navItems.forEach((item) => {
      if(item.id === 'ziel-container') return

      console.log('othersLength', lengthData[containerToSetActive.id].othersLength)
      item.style.width = lengthData[containerToSetActive.id].othersLength
    })

    // console.log('lengthData', lengthData)

    containerToSetActive.style.width = lengthData[containerToSetActive.id].hisLength
  })
})


// Presetting first container as active
const clickEvent = new Event('click')
document.getElementById('immobilie').dispatchEvent(clickEvent)

// Recalculate the ratios when window gets resized
let timerId
const debounceFn = (func, delay) => {
  clearTimeout(timerId)

  timerId = setTimeout(func, delay)
}

const recalculateRatios = () => {
  console.log('resisizing')
  updateLengthData()
  const currentActiveNavSection = document.querySelector('.active')
  const currentActiveSubNav = currentActiveNavSection.querySelector('.dot.main')
  currentActiveSubNav.dispatchEvent(clickEvent)
}

window.addEventListener('resize', () => {
  debounceFn(recalculateRatios, 200)
})