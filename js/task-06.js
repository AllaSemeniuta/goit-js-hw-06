
const inputEl = document.querySelector('#validation-input')
const numberOfSymbols = Number(inputEl.dataset.length)

inputEl.addEventListener('blur', onInputBlur) 

function onInputBlur (event) {
    const inputValueLengt = event.currentTarget.value.trim().length


    if(numberOfSymbols === inputValueLengt) {
        inputEl.classList.add('valid')
    } else (
        inputEl.classList.add('invalid')
    )
   
}

