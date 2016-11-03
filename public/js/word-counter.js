'use strict'

const totalChars = 1000
const textField = document.getElementById('beskrivelse')
const tegnIgjen = document.getElementById('tegnIgjen')

const updateCount = () => {
  tegnIgjen.textContent = totalChars - textField.value.length
}

textField.addEventListener('input', updateCount)

updateCount()
