
export { setupActiveClassOnSubnav }


const setupActiveClassOnSubnav = (curItem, tarItem) => {

  curItem.classList.remove('active')

  tarItem.classList.add('active')
}