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

// file reader
const inputWeb = document.getElementById('input-web')
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
    }
})