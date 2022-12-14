

const spanBgColorEl= document.querySelector('.color')
const buttonEl = document.querySelector('.change-color')
const body = document.querySelector('body')

buttonEl.addEventListener('click', onButtonClick)

function onButtonClick(event) {

 const randomColor =  getRandomHexColor()
 
 spanBgColorEl.textContent = randomColor
 body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
