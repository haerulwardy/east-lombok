const toolswebContent = document.getElementById('toolsweb-content')
const addwebBtn = document.getElementById('add-web-btn')
const editWeb = document.getElementById('edit-web')
const modalWeb = document.getElementById('modal-web')
const closeWeb = document.getElementById('close-web')

// event
addwebBtn.addEventListener('click', function() {
    modalWeb.classList.toggle('invisible')
})
editWeb.addEventListener('click', function() {
    modalWeb.classList.toggle('invisible')
}) 
closeWeb.addEventListener('click', function() {
    modalWeb.classList.toggle('invisible')
})