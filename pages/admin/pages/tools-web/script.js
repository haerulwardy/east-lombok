const toolswebContent = document.getElementById('toolsweb-content')
const addwebBtn = document.getElementById('add-web-btn')
const modalWeb = document.getElementById('modal-web')
const closeWeb = document.getElementById('close-web')

// event
addwebBtn.addEventListener('click', function() {
    modalWeb.classList.toggle('invisible')
})
closeWeb.addEventListener('click', function() {
    modalWeb.classList.toggle('invisible')
})

// file reader
const inputWeb = document.getElementById('input-web')
const webPreview = document.getElementById('web-preview')
const textWeb = document.getElementById('text-web')

inputWeb.addEventListener('change', function() {
    const file = this.files[0]
    if(file) {
        const reader = new FileReader()

        textWeb.classList.add('hidden')
        webPreview.classList.remove('hidden')

        reader.addEventListener('load', function() {
            webPreview.setAttribute('src', this.result)
        })
        reader.readAsDataURL(file)
    }
})

// sidebar
const sidebarIcon = document.getElementById('sidebar-icon')
const sidebar = document.getElementById('sidebar')
const menuSidebar = document.getElementById('menu-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const logo = document.getElementById('logo')
const menubar = document.querySelectorAll('.menu-bar')
const webContainer = document.getElementById('web-container')

sidebarIcon.addEventListener('click', function() {
    sidebar.classList.toggle('w-1/4')
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    webContainer.classList.toggle('w-custom-sidebar')
    webContainer.classList.toggle('w-full')
    webContainer.classList.toggle('ml-96')
    webContainer.classList.toggle('ml-20')
    modalWeb.classList.toggle('w-3/4')
    modalWeb.classList.toggle('w-full')
})

// top bar
const topbarIcon = document.getElementById('topbar-icon')
const menubarDown = document.getElementById('menubar-down') 

topbarIcon.addEventListener('click', function() {
    menubarDown.classList.toggle('hidden')
    menubarDown.classList.toggle('transform')
})