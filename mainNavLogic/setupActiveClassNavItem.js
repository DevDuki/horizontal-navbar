
export { setupActiveClassOnNavitem }


const setupActiveClassOnNavitem = (curItem, tarItem) => {

  curItem.classList.remove('active')

  tarItem.classList.add('active')
}