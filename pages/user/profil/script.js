// selection
// =========================
// selection dropdown
const tools = document.getElementById('tools')
const dropTools = document.getElementById('tools-dropdown')
const joinGrup =  document.getElementById('join-grup')
const dropJoin = document.getElementById('join-dropdown')
const profil = document.getElementById('profil')
const dropProfil = document.getElementById('profil-dropdown')

// selection responsive
const resBtn = document.getElementById('reponsive-btn')
const respMenu = document.getElementById('responsive-menu')
const navbar = document.getElementById('navbar')
const close = document.getElementById('close')
const hamburger = document.getElementById('hamburger-menu')

// close modal
const editProfil = document.getElementById('edit-profil')
const closeBg = document.getElementById('close-bg')
const closeBtn = document.getElementById('close-modal')

// functions
// ===========

// dropdown function
function menuDropdown(menu, modal) {
    menu.addEventListener('click', function() {
        modal.classList.toggle('invisible')
        if(modal == dropTools) {
            dropJoin.classList.add('invisible')
            dropProfil.classList.add('invisible')
        } else if(modal == dropJoin) {
            dropTools.classList.add('invisible')
            dropProfil.classList.add('invisible')
        } else if(modal == dropProfil) {
            dropTools.classList.add('invisible')
            dropJoin.classList.add('invisible')
        }
    })
}

// responsive function
function responsiveEffect() {
    respMenu.classList.toggle('-translate-y-1/4')
    respMenu.classList.toggle('-translate-y-0')
    respMenu.classList.toggle('opacity-0')
    respMenu.classList.toggle('opacity-100')
    respMenu.classList.toggle('invisible')
    navbar.classList.toggle('shadow-xl')
    hamburger.classList.toggle('hidden')
    close.classList.toggle('hidden')
}
// close modal
function closeModal() {
    closeBg.classList.toggle('invisible')
}


// events
resBtn.addEventListener('click', function() {
    responsiveEffect()
})
editProfil.addEventListener('click', function() {
    closeModal()
})
closeBtn.addEventListener('click', function() {
    closeModal()
    // alert('ok')
})


// running
menuDropdown(tools, dropTools)
menuDropdown(joinGrup, dropJoin)
menuDropdown(profil, dropProfil)

// image preview handle
const inputProfil = document.getElementById('input-profil')
const profilContainer = document.getElementById('input-profil-container')
const profilPreview = document.getElementById('profil-preview')
const textProfil = document.getElementById('text-profil')

inputProfil.addEventListener('change', function() {
    const file = this.files[0]

    if(file) {
        const reader = new FileReader()

        profilPreview.classList.remove('hidden')
        textProfil.classList.add('hidden')

        reader.addEventListener('load', function() {
            profilPreview.setAttribute('src', this.result)
        })

        reader.readAsDataURL(file)
    }
})