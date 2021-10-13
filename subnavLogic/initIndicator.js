
import { ANIMATION_DURATION } from '../constants.js'

export { initIndicator }


const initIndicator = () => {

  const delayedIndicatorIniter = () => {

    const firstSubnav = document.querySelector('#immobilie-container .subnav-label.active')

    const clickEvent = new Event('click')
    firstSubnav.dispatchEvent(clickEvent)
  }

  setTimeout(delayedIndicatorIniter, ANIMATION_DURATION)
}