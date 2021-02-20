const toolscli = document.getElementById('toolscli-content')
const btnCli = document.getElementById('add-maintenance-btn')
const editCli = document.getElementById('edit-cli')
const modalCli = document.getElementById('modal-toolscli')
const closeCli = document.getElementById('close-maintenance')

// event
btnCli.addEventListener('click', function() {
    modalCli.classList.toggle('invisible')
})
editCli.addEventListener('click', function() {
    modalCli.classList.toggle('invisible')
})
closeCli.addEventListener('click', function() {
    modalCli.classList.toggle('invisible')
})

// file reader
const inputCli = document.getElementById('input-cli')
const cliPreview = document.getElementById('cli-preview')
const textCli = document.getElementById('text-cli')

inputCli.addEventListener('change', function() {
    const file = this.files[0]


    if(file) {
        const reader = new FileReader()

        textCli.classList.add('hidden')
        cliPreview.classList.remove('hidden')

        reader.addEventListener('load', function() {
            cliPreview.setAttribute('src', this.result)
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
const cliContainer = document.getElementById('cli-container')

sidebarIcon.addEventListener('click', function() {
    sidebar.classList.toggle('w-1/4')
    menuSidebar.classList.toggle('hidden')
    closeSidebar.classList.toggle('hidden')
    logo.classList.toggle('w-14')
    logo.classList.toggle('pt-10')
    menubar.forEach(menu => {
        menu.classList.toggle('hidden')
    })
    cliContainer.classList.toggle('w-custom-sidebar')
    cliContainer.classList.toggle('w-full')
    cliContainer.classList.toggle('ml-96')
    cliContainer.classList.toggle('ml-20')
    modalCli.classList.toggle('w-3/4')
    modalCli.classList.toggle('w-full')
})

// top bar
const topbarIcon = document.getElementById('topbar-icon')
const menubarDown = document.getElementById('menubar-down') 

topbarIcon.addEventListener('click', function() {
    menubarDown.classList.toggle('hidden')
    menubarDown.classList.toggle('transform')
})