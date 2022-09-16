let counterValue = 0;
const counterValueEl = document.querySelector('#value')
const counterEl = document.querySelector('#counter')
const buttonDecrement = counterEl.firstElementChild
const buttonIncrement = counterEl.lastElementChild
    
buttonDecrement.addEventListener('click', onDecrementBtnClick)
buttonIncrement.addEventListener('click', onIncrementBtnClick )

function onDecrementBtnClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;


}
function onIncrementBtnClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;


}
