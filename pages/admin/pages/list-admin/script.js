const listadminContent = document.getElementById('listadmin-content')
const btnAdmin = document.getElementById('add-admin-btn')
const editAdmin = document.getElementById('edit-admin')
const modalAdmin = document.getElementById('modal-admin')
const closeAdmin = document.getElementById('close-admin')

// event
btnAdmin.addEventListener('click', function() {
    modalAdmin.classList.toggle('invisible')
})
editAdmin.addEventListener('click', function() {
    modalAdmin.classList.toggle('invisible')
})
closeAdmin.addEventListener('click', function() {
    modalAdmin.classList.add('invisible')
})

// sidebar
const sidebarIcon = document.getElementById('sidebar-icon')
const menuSidebar = document.getElementById('menu-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const sidebar = document.getElementById('sidebar')
const menubar = document.querySelectorAll('.menu-bar')
const logo = document.getElementById('logo')
const adminContainer = document.getElementById('admin-container')

sidebarIcon.addEventListener('click', function() {
    sidebar.classList.toggle('w-1/4')
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    adminContainer.classList.toggle('w-custom-sidebar')
    adminContainer.classList.toggle('w-full')
    adminContainer.classList.toggle('ml-96')
    adminContainer.classList.toggle('ml-20')
})









