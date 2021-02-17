const topbarIcon = document.getElementById('topbar-icon')
const menubarDown = document.getElementById('menubar-down') 

topbarIcon.addEventListener('click', function() {
    menubarDown.classList.toggle('hidden')
    menubarDown.classList.toggle('transform')
})

// sidebar
const sidebar = document.getElementById('sidebar')
const sidebarIcon = document.getElementById('sidebar-icon')
const menubar = document.querySelectorAll('.menu-bar')
const logo = document.getElementById('logo')
const sidebarContent = document.getElementById('sidebar-content')
const menuSidebar = document.getElementById('menu-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const containerPost = document.getElementById('container-post')

sidebarIcon.addEventListener('click', function() {
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    containerPost.classList.toggle('w-custom-sidebar')
    containerPost.classList.toggle('ml-96')
    containerPost.classList.toggle('ml-20')
    sidebar.classList.toggle('w-1/4')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    sidebarContent.classList.toggle('pt-6')
    sidebarContent.classList.toggle('mt-8')
})

// ck editor
ClassicEditor.create(document.getElementById('my-editor'))















