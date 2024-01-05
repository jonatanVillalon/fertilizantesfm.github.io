/* Toggle menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggle.classList.toggle('is-active')
            nav.classList.toggle("is_active")
        })
    }
}

showMenu('main-menu-toggle', 'main-nav');