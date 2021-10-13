
import { MAIN_DOT_SIZE, ANIMATION_DURATION } from '../constants.js'
import { positionIndicator } from '../utils/positionIndicator.js'

export { setupIndicator }


const setupIndicator = (curItem, tarItem) => {

  const curIndicator = curItem.querySelector('.indicator')

  // Remove the indicator from view, by setting it back to its default values
  if(curIndicator) curIndicator.style.cssText = `width: 0; left: -${MAIN_DOT_SIZE}px;`

  const tarIndicator = tarItem.querySelector('.indicator')

  const firstSubnavItem = tarItem.querySelector('.subnav')?.firstElementChild
  if(!firstSubnavItem) return // navItem "Ziel" has no subnav

  // Delaying this for a smoother UX. Indicator will show up after resizing animation of nav items are done
  setTimeout(() => {
    positionIndicator(firstSubnavItem, tarIndicator)
  }, ANIMATION_DURATION)
}