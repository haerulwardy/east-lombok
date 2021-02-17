// sidebar
const sidebarIcon = document.getElementById('sidebar-icon')
const sidebar = document.getElementById('sidebar')
const menuSidebar = document.getElementById('menu-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const logo = document.getElementById('logo')
const menubar = document.querySelectorAll('.menu-bar')
const tokenContainer = document.getElementById('token-container')

sidebarIcon.addEventListener('click', function() {
    sidebar.classList.toggle('w-1/4')
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    tokenContainer.classList.toggle('w-custom-sidebar')
    tokenContainer.classList.toggle('w-full')
    tokenContainer.classList.toggle('ml-96')
    tokenContainer.classList.toggle('ml-20')
})