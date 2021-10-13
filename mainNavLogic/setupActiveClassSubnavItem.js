
export { setupActiveClassOnSubnavItem }


const setupActiveClassOnSubnavItem = (curItem, tarItem) => {

  // Remove the active state from current active subnav item in the current
  const subnavItem = curItem.querySelector('.subnav .active')
  if(subnavItem) subnavItem.classList.remove('active')

  // Fetch the first subnav's label
  const firstSubnavItem = tarItem.querySelector('.subnav')?.firstElementChild

  // Set it to active
  if(!firstSubnavItem) return // navItem "Ziel" has no subnav
  firstSubnavItem.classList.add('active')
}