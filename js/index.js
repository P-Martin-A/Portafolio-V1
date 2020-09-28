navImage.addEventListener('click', e => {
    
    if(navImage.classList.contains('menu')) {
        navImage.setAttribute('src', 'images/close.svg')
        navImage.setAttribute('alt', 'Close')
        navImage.classList.add('close')
        navImage.classList.remove('menu')
        navList.classList.add('active')
        document.body.style.overflowY = 'hidden'
        
        const LINKS = document.querySelectorAll('.link')
        LINKS.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active')
                navImage.setAttribute('src', 'images/menu.svg')
                navImage.setAttribute('alt', 'Menu')
                navImage.classList.add('menu')
                navImage.classList.remove('close')
                navList.classList.remove('active')
                document.body.style.overflowY = 'scroll'
            })
        })
    } else {
        navImage.setAttribute('src', 'images/menu.svg')
        navImage.setAttribute('alt', 'Menu')
        navImage.classList.add('menu')
        navImage.classList.remove('close')
        navList.classList.remove('active')
        document.body.style.overflowY = 'scroll'
    }
})

window.addEventListener('scroll', (e) => {
    let sy = window.scrollY
    if(sy > 600) {
        ancla.classList.add('active')
    } else {
        ancla.classList.remove('active')
    }
})