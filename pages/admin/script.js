// sidebar
const sidebar = document.getElementById('sidebar')
const sidebarIcon = document.getElementById('sidebar-icon')
const menubar = document.querySelectorAll('.menu-bar')
const logo = document.getElementById('logo')
const sidebarContent = document.getElementById('sidebar-content')
const menuSidebar = document.getElementById('menu-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const containerDashboard = document.getElementById('container-dashboard')

sidebarIcon.addEventListener('click', function() {
    sidebar.classList.toggle('w-1/4')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    sidebarContent.classList.toggle('pt-6')
    sidebarContent.classList.toggle('mt-8')
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    containerDashboard.classList.toggle('ml-96')
    containerDashboard.classList.toggle('ml-20')
    containerDashboard.classList.toggle('w-custom-sidebar')
})

// top bar
const topbarIcon = document.getElementById('topbar-icon')
const menubarDown = document.getElementById('menubar-down') 

topbarIcon.addEventListener('click', function() {
    menubarDown.classList.toggle('hidden')
    menubarDown.classList.toggle('transform')
})
