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
    navbar.classList.toggle('shadow-xl')
    hamburger.classList.toggle('hidden')
    close.classList.toggle('hidden')
}


// events
resBtn.addEventListener('click', function() {
    responsiveEffect()
})


// running
menuDropdown(tools, dropTools)
menuDropdown(joinGrup, dropJoin)
menuDropdown(profil, dropProfil)