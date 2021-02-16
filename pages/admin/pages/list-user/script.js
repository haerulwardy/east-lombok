const listuserContent = document.getElementById('listuser-content')
const btnUser = document.getElementById('add-user-btn')
const editUser = document.getElementById('edit-user')
const modalUser = document.getElementById('modal-user')
const closeUser = document.getElementById('close-user')

// event
btnUser.addEventListener('click', function() {
    modalUser.classList.toggle('invisible')
})
editUser.addEventListener('click', function() {
    modalUser.classList.toggle('invisible')
})
closeUser.addEventListener('click', function() {
    modalUser.classList.add('invisible')
})