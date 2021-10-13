
import {
  debounceIndicatorRecalculation,
  recalculateIndicatorPosition
} from './resizeIndicator/resizeIndicator.js'

export { initWindowResizeHandlers }


const initWindowResizeHandlers = () => {
  window.addEventListener('resize', () => {
    debounceIndicatorRecalculation(recalculateIndicatorPosition, 150)
  })
}
