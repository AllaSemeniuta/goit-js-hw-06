
  const block = document.querySelector('#controls');
  const input = block.firstElementChild;
  const buttonCreate = block.children[1];
  const buttonDestroy = block.lastElementChild;
  const boxWraper = document.querySelector('#boxes')


  buttonCreate.addEventListener('click', handlerButtonCreateClick)

  buttonDestroy.addEventListener('click', handlerButtonDestroyClick)

function handlerButtonCreateClick(){
  createBoxes(input.value);

}

function handlerButtonDestroyClick(){
    boxWraper.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {

  for (let i=0; i <= amount-1; i+=1 ) {

  const newBox =  document.createElement('div');
  newBox.style.width += 30 + (10 * [i]) + "px"
  newBox.style.height += 30 + (10 * [i]) + "px"
  newBox.style.backgroundColor = getRandomHexColor();
  boxWraper.append(newBox)

  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}