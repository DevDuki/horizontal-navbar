
import { setupIndicator } from './setupIndicator.js'
import { setupActiveClassOnSubnavItem } from './setupActiveClassSubnavItem.js'
import { setupActiveClassOnNavitem } from './setupActiveClassNavItem.js'

export { setupMainNavEventHandler }


const navItems = document.querySelectorAll('.nav-item-container')
const navIcons = document.querySelectorAll('.dot.main')

const setupMainNavEventHandler = () => {

  navIcons.forEach(navIcon => {

    navIcon.addEventListener('click', (e) => {

      const targetItem = e.currentTarget.parentElement

      const currentActiveItem = Array.from(navItems).filter(navItem => navItem.classList.contains('active'))[0]

      setupIndicator(currentActiveItem, targetItem)
      setupActiveClassOnSubnavItem(currentActiveItem, targetItem)
      setupActiveClassOnNavitem(currentActiveItem, targetItem)

    })
  })

}