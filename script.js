const navItems = document.querySelectorAll('.nav-item-container')
const navIcons = document.querySelectorAll('.dot.main')

navIcons.forEach(navIcon => {

  navIcon.addEventListener('click', (e) => {
    const navIconId = e.currentTarget.id

    navItems.forEach(item => {

      const currentActive = item.classList.contains('active')

      console.log(currentActive)

      if(currentActive) {
        item.classList.remove('active')
        const subnav = item.querySelector('.subnav')
        subnav.classList.remove('slide-in')
        subnav.classList.add('slide-out')
      }

      const itemId = item.id

      console.log('itemId inclusded: ', itemId.includes(navIconId))

      if(itemId.includes(navIconId)){
        item.classList.add('active')
        const subnav = item.querySelector('.subnav')
        subnav.classList.remove('slide-out')
        subnav.classList.add('slide-in')
      }

      // const subnav = item.querySelector('.subnav')
      // if(subnav) subnav.classList.add('slide-in')
    })
  })
})