document.addEventListener('DOMContentLoaded', () => {

    var text = document.querySelector('#texto')
    var resul = document.querySelector('#resul')
    var btnTransform = document.querySelector('#btnTransform')
    var btnCopy = document.querySelector('#copy')

    btnCopy.style.display = 'none'

    btnTransform.addEventListener('click', () => {
        
        resul.value = upper(text.value)

        text.value = ''
        text.focus()

        btnCopy.style.display = 'block'
    })

    btnCopy.addEventListener('click', () => {
        resul.select()
        document.execCommand('copy')
    })

    function upper(text) {
        return text.toUpperCase()
    }

})
