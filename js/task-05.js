
const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')


inputEl.addEventListener('input', onInputInput)


function onInputInput () {

    const inputNameTrim = inputEl.value.trim()

    if(inputNameTrim.length === 0) {
        spanEl.textContent = "Anonymous"
    } else { spanEl.textContent = inputNameTrim
    }


}