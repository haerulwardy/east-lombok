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









