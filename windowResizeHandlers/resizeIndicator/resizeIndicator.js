
import { positionIndicator } from '/utils/positionIndicator.js'

export { debounceIndicatorRecalculation, recalculateIndicatorPosition}


// Recalculate the indicator's position, when window gets resized

let timerId

const debounceIndicatorRecalculation = (fn, delay) => {
  clearTimeout(timerId)

  timerId = setTimeout(fn, delay)
}

const recalculateIndicatorPosition = () => {
  const curActiveSubnav = document.querySelector('.nav-item-container.active .subnav')

  const curActiveSubnavLabel = curActiveSubnav.querySelector('.subnav-label.active')
  const indicator = curActiveSubnav.querySelector('.indicator')

  positionIndicator(curActiveSubnavLabel, indicator)
}