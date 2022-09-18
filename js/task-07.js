
const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
// textEl.style.fontSize = '56px'
 textEl.style.fontSize = (Number(inputEl.max) + Number(inputEl.min))/2 + 'px'


inputEl.addEventListener('input', onInputRange) 

function onInputRange(event) {

    const value = event.currentTarget.valueAsNumber 
    console.log(value)

    textEl.style.fontSize = value + 'px';
}