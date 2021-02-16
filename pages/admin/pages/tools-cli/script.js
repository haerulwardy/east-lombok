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