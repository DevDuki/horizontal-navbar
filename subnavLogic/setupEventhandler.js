
import { setupActiveClassOnSubnav } from './setupActiveClassSubnav.js'
import { positionIndicator } from '../utils/positionIndicator.js'

export { setupSubnavEventHandler }


const subnavLabels = document.querySelectorAll('.subnav-label')

const setupSubnavEventHandler = () => {
  subnavLabels.forEach(subnavLabel => {

    subnavLabel.addEventListener('click',  (e) => {

      const targetSubnav = e.currentTarget

      const currentActiveSubnav = document.querySelector('.subnav-label.active')

      setupActiveClassOnSubnav(currentActiveSubnav, targetSubnav)


      const indicator = targetSubnav.parentNode.lastElementChild

      positionIndicator(targetSubnav, indicator)
    })
  })
}
