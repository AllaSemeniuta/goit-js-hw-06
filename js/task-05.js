
const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')


inputEl.addEventListener('input', onInputInput)

function onInputInput (event) {
    const inputNameTrim = inputEl.value.trim()

    spanEl.textContent = inputNameTrim
}
