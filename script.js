const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

var height = Number(inputHeight.value)
var weight = Number(inputWeight.value)


function calculateIMC (kilograms, height) {
    height = height / 100
    return (kilograms / (height * height))
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    
    var result = calculateIMC(weight, height)
    alert('Calculo IMC', result)

})