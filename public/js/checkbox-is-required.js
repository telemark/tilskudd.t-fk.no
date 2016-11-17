'use strict'

var button = document.getElementById('nextButton')
var inputs = document.getElementsByTagName('input')
var checkboxes = []

Object.keys(inputs).forEach(function (objKey) {
  var input = inputs[objKey]
  if (input.type === 'checkbox' && checkboxes.indexOf(input) === -1) {
    checkboxes.push(input)
    input.addEventListener('click', function (e) {
      inputOk()
    })
  }
})

function inputOk () {
  button.disabled = true
  checkboxes.forEach(function (box) {
    if (box.checked === true) {
      button.disabled = false
    }
  })
}

inputOk()