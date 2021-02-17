const topbarIcon = document.getElementById('topbar-icon')
const menubarDown = document.getElementById('menubar-down') 

topbarIcon.addEventListener('click', function() {
    menubarDown.classList.toggle('hidden')
    menubarDown.classList.toggle('transform')
})