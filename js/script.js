

function calculateIMC(kilograms, height) {
    return (kilograms / (height * height))
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const inputHeight = document.querySelector('#height')
    const inputWeight = document.querySelector('#weight')

    var height = Number(inputHeight.value)
    var weight = Number(inputWeight.value)

    var result = calculateIMC(weight, height)
    
    alert(`Calculo IMC ${result.toFixed(2)}`)

})