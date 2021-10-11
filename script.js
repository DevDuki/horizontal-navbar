const navItems = document.querySelectorAll('.nav-item-container')
const navIcons = document.querySelectorAll('.dot.main')

navIcons.forEach(navIcon => {

  navIcon.addEventListener('click', (e) => {
    const navIconId = e.currentTarget.id

    navItems.forEach(item => {

      const currentActive = item.classList.contains('active')

      if(currentActive) {
        item.classList.remove('active')
        const subnav = item.querySelector('.subnav')

        // Ziel Container has no subnav
        if(!subnav) return

        subnav.classList.remove('slide-in')
        subnav.classList.add('slide-out')
      }

      const itemId = item.id

      if(itemId.includes(navIconId)){
        item.classList.add('active')
        const subnav = item.querySelector('.subnav')

        // Ziel Container has no subnav
        if(!subnav) return

        subnav.classList.remove('slide-out')
        subnav.classList.add('slide-in')
      }

      // const subnav = item.querySelector('.subnav')
      // if(subnav) subnav.classList.add('slide-in')
    })
  })
})

// const subnavLabels = document.querySelectorAll('.')