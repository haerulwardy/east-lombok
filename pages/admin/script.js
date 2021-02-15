// add admin
const addAdmin = document.getElementById('modal-admin')
const btnAdmin = document.getElementById('add-admin-btn')
const closeAdmin = document.getElementById('close-admin')
btnAdmin.addEventListener('click', function() {
    addAdmin.classList.toggle('invisible')
}) 
closeAdmin.addEventListener('click', function() {
    addAdmin.classList.toggle('invisible')
})
// add user
const addUser = document.getElementById('modal-user')
const btnUser = document.getElementById('add-user-btn')
const closeUser = document.getElementById('close-user')
btnUser.addEventListener('click', function() {
    addUser.classList.toggle('invisible')
}) 
closeUser.addEventListener('click', function() {
    addUser.classList.toggle('invisible')
})

// add maintenancec
const addMaintenance = document.getElementById('modal-maintenance')
const btnMaintenance = document.getElementById('add-maintenance-btn')
const closeMaintenance = document.getElementById('close-maintenance')
btnMaintenance.addEventListener('click', function() {
    addMaintenance.classList.toggle('invisible')
}) 
closeMaintenance.addEventListener('click', function() {
    addMaintenance.classList.toggle('invisible')
})

// add web
const addWeb = document.getElementById('modal-web')
const btnWeb = document.getElementById('add-web-btn')
const closeWeb = document.getElementById('close-web')
const editWeb = document.getElementById('edit-web')
btnWeb.addEventListener('click', function() {
    addWeb.classList.toggle('invisible')
}) 
closeWeb.addEventListener('click', function() {
    addWeb.classList.toggle('invisible')
})
editWeb.addEventListener('click', function() {
    addWeb.classList.toggle('invisible')
})

// menu sidebar
const menus = document.getElementsByClassName("menu-item")

// invisible effect
const addPostContent = document.getElementById('addpost-content')
const dashboardContent = document.getElementById('dashboard-content')
const listadminContent = document.getElementById('listadmin-content')
const listuserContent = document.getElementById('listuser-content')
const tokenloginContent = document.getElementById('tokenlogin-content')
const toolscliContent = document.getElementById('toolscli-content')
const toolswebContent = document.getElementById('toolsweb-content')

for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function(e) {
        e.preventDefault()
        let current = document.getElementsByClassName('bg-primary-footer')
        current[0].className = current[0].className.replace(' bg-primary-footer', '')
        this.className += ' bg-primary-footer'
        
        if (this.id === 'add-post') {
            addPostContent.classList.remove('hidden')
            // remove
            dashboardContent.classList.add('hidden')
            listadminContent.classList.add('hidden')
            listuserContent.classList.add('hidden')
            tokenloginContent.classList.add('hidden')
            toolscliContent.classList.add('hidden')
            toolswebContent.classList.add('hidden')
        } else if(this.id === 'list-admin') {
            listadminContent.classList.remove('hidden')
            // remove
            dashboardContent.classList.add('hidden')
            addPostContent.classList.add('hidden')
            listuserContent.classList.add('hidden')
            tokenloginContent.classList.add('hidden')
            toolscliContent.classList.add('hidden')
            toolswebContent.classList.add('hidden')
        }else if(this.id === 'list-user') {
            listuserContent.classList.remove('hidden')
            // remove
            dashboardContent.classList.add('hidden')
            listadminContent.classList.add('hidden')
            addPostContent.classList.add('hidden')
            tokenloginContent.classList.add('hidden')
            toolscliContent.classList.add('hidden')
            toolswebContent.classList.add('hidden')
        } else if (this.id === 'token-login') {
            tokenloginContent.classList.remove('hidden')
            // remove
            dashboardContent.classList.add('hidden')
            listadminContent.classList.add('hidden')
            listuserContent.classList.add('hidden')
            addPostContent.classList.add('hidden')
            toolscliContent.classList.add('hidden')
            toolswebContent.classList.add('hidden')
        }else if (this.id === 'tools-cli') {
            toolscliContent.classList.remove('hidden')
            // remove
            dashboardContent.classList.add('hidden')
            listadminContent.classList.add('hidden')
            listuserContent.classList.add('hidden')
            tokenloginContent.classList.add('hidden')
            addPostContent.classList.add('hidden')
            toolswebContent.classList.add('hidden')
        }else if (this.id === 'tools-web') {
            toolswebContent.classList.remove('hidden')
            // remove
            dashboardContent.classList.add('hidden')
            listadminContent.classList.add('hidden')
            listuserContent.classList.add('hidden')
            tokenloginContent.classList.add('hidden')
            toolscliContent.classList.add('hidden')
            addPostContent.classList.add('hidden')
        }else if (this.id === 'dashboard') {
            dashboardContent.classList.remove('hidden')
            // remove
            addPostContent.classList.add('hidden')
            listadminContent.classList.add('hidden')
            listuserContent.classList.add('hidden')
            tokenloginContent.classList.add('hidden')
            toolscliContent.classList.add('hidden')
            toolswebContent.classList.add('hidden')
        }
    })
}

// edit post
const editPost = document.querySelectorAll('#edit-post')
editPost.forEach(items => {
    items.addEventListener('click', function(e) {
        e.preventDefault()
        addPostContent.classList.remove('hidden')
            // remove
        dashboardContent.classList.add('hidden')
        listadminContent.classList.add('hidden')
        listuserContent.classList.add('hidden')
        tokenloginContent.classList.add('hidden')
        toolscliContent.classList.add('hidden')
        toolswebContent.classList.add('hidden')
        const dashboardMenu = document.getElementById('dashboard')
        const addPost = document.getElementById('add-post')
        dashboardMenu.classList.remove('bg-primary-footer')
        addPost.classList.add('bg-primary-footer')
    })
})

// preview handle
// maintenance cli
const inputCli = document.getElementById('input-cli')
const cliContainer = document.getElementById('input-cli-container')
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
    } else {
        textCli.classList.add('hidden')
        cliPreview.classList.add('hidden')
    }
})
// maintenance web
const inputWeb = document.getElementById('input-web')
const webContainer = document.getElementById('input-web-container')
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
    } else {
        textWeb.classList.add('hidden')
        webPreview.classList.add('hidden')
    }
})