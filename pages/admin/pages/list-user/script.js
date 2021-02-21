const listuserContent = document.getElementById('listuser-content')
const btnUser = document.getElementById('add-user-btn')
const modalUser = document.getElementById('modal-user')
const closeUser = document.getElementById('close-user')

// event
btnUser.addEventListener('click', function() {
    modalUser.classList.toggle('invisible')
})
closeUser.addEventListener('click', function() {
    modalUser.classList.add('invisible')
})

// sidebar
const sidebarIcon = document.getElementById('sidebar-icon')
const sidebar = document.getElementById('sidebar')
const logo = document.getElementById('logo')
const menuSidebar = document.getElementById('menu-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const menubar = document.querySelectorAll('.menu-bar')
const userContainer = document.getElementById('user-container')

sidebarIcon.addEventListener('click', function() {
    sidebar.classList.toggle('w-1/4')
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    userContainer.classList.toggle('w-custom-sidebar')
    userContainer.classList.toggle('w-full')
    userContainer.classList.toggle('ml-96')
    userContainer.classList.toggle('ml-20')
    modalUser.classList.toggle('w-3/4')
    modalUser.classList.toggle('w-full')
})

// top bar
const topbarIcon = document.getElementById('topbar-icon')
const menubarDown = document.getElementById('menubar-down') 

topbarIcon.addEventListener('click', function() {
    menubarDown.classList.toggle('hidden')
    menubarDown.classList.toggle('transform')
})