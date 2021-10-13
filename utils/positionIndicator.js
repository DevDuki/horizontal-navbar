
import { MAIN_DOT_SIZE} from '../constants.js'

export { positionIndicator }

const positionIndicator = (element, indicator) => {

  // Get the navItemContainer's X-Position to calculate indicator's correct position
  const navItemContainer = element.parentElement.parentElement

  const elementBoundingRect = element.getBoundingClientRect()
  const navItemBoundingRect = navItemContainer.getBoundingClientRect()


  const left =
    /* left position of elemen + scroll distance (if navbar wider than window) - left position of navItem - size of the dot */
    elementBoundingRect.left + window.scrollX - navItemBoundingRect.left - MAIN_DOT_SIZE
  const width = element.clientWidth

  indicator.style.cssText = `width: ${width + 'px'}; left: ${left + 'px'};`
}