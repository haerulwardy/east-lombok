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