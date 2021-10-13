
import { setupMainNavEventHandler } from './mainNavLogic/setupEventHandler.js'
import { setupSubnavEventHandler } from './subnavLogic/setupEventhandler.js'
import { initIndicator } from './subnavLogic/initIndicator.js'
import { initWindowResizeHandlers } from './windowResizeHandlers/initWindowResizeHandlers.js'


setupMainNavEventHandler()
setupSubnavEventHandler()

// At initial page laod, set the Indicator to first subnav
initIndicator()

initWindowResizeHandlers()
