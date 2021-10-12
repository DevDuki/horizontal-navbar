
// Functionality for the main navpoint (big circles)
const navItems = document.querySelectorAll('.nav-item-container')
const navIcons = document.querySelectorAll('.dot.main')

navIcons.forEach(navIcon => {

  navIcon.addEventListener('click', (e) => {

    // Later used to determine the corresponding navItem
    const navIconId = e.currentTarget.id

    navItems.forEach(item => {

      // Remove active class from the current active element
      const currentActive = item.classList.contains('active')
      if(currentActive) {

        const ctxt = item.id.slice(0, item.id.lastIndexOf('-')) // Removes all characters after and including "-". Example: immobilie-container => immobilie
        const indicator = item.querySelector('.indicator')
        const currentActiveSubnav = item.querySelector('.subnav-label.active')

        if(indicator) {
          indicator.style.width = '0'
          indicator.style.left = '15px'
        }



        item.classList.remove('active')

        // Remove the active state from subnav items in the current active element
        const subnavItems = item.querySelector('.subnav')?.children

        if(!subnavItems) return // navItem "Ziel" has no subnav
        Array.from(subnavItems).forEach(subnavItem => subnavItem.classList.remove('active'))

      }

      // Use the id to determine which element should be set to active
      const itemId = item.id
      if(itemId.includes(navIconId)){ // itemId example: immobilie-container, nacIconId example: immobilie
        item.classList.add('active')

        // Set the first subnavitem to active
        const firstSubnavItem = item.querySelector('.subnav')?.firstElementChild

        if(!firstSubnavItem) return // navItem "Ziel" has no subnav
        firstSubnavItem.classList.add('active')

        const ctxt = item.id.slice(0, item.id.lastIndexOf('-')) // Removes all characters after and including "-". Example: immobilie-container => immobilie
        const indicator = item.querySelector('.indicator')

        setTimeout(() => {
          positionIndicator(firstSubnavItem, indicator)
        }, 900)
      }
    })
  })
})



// Functionality for the subnav points (top bars)
const subnavLabels = document.querySelectorAll('.subnav-label')

const indicators = document.querySelectorAll('.indicator')

// navItems.forEach(navItem => {

//   const indicator = document.createElement('span')
//   indicator.classList.add('indicator')
//   const ctxt = navItem.id.slice(0, navItem.id.lastIndexOf('-')) // Removes all characters after and including "-". Example: immobilie-container => immobilie
//   indicator.id = `${ctxt}-indicator`

//   navItem.append(indicator)
// })

subnavLabels.forEach(subnavLabel => {

  subnavLabel.addEventListener('click',  (e) => {

    const prevActiveSubnav = document.querySelector('.subnav-label.active')
    prevActiveSubnav.classList.remove('active')

    const newActiveSubnav = e.currentTarget
    newActiveSubnav.classList.add('active')

    const indicator = newActiveSubnav.parentNode.lastElementChild

    positionIndicator(newActiveSubnav, indicator)
  })
})

const positionIndicator = (element, indicator) => {

  // Get the navItemContainer's X-Position to calculate indicator's correct position
  const navItemContainer = element.parentElement.parentElement

  const elementBoundingRect = element.getBoundingClientRect()


  const left = elementBoundingRect.left + window.scrollX - navItemContainer.getBoundingClientRect().left - 15 + 'px'
  const width = element.clientWidth + 'px'

  indicator.style.left = left
  indicator.style.width = width
}

const slideOutIndicator = (indicator) => {
  indicator.classList.remove('slide-in')
  indicator.classList.add('slide-out')
}

const slideInIndicator = indicator => {
  indicator.classList.remove('slide-out')
  indicator.classList.add('slide-in')
}

// At initial page laod, set the Indicator to first subnav
const initIndicator = () => {
  const firstSubnav = document.querySelector('#immobilie-container .subnav-label.active')
  const clickEvent = new Event('click')
  firstSubnav.dispatchEvent(clickEvent)
}

setTimeout(initIndicator, 900)