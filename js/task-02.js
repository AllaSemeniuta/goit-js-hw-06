const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items =[];

for (let i=0; i < ingredients.length; i+= 1 ) {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = ingredients[i];
  ingredientsItemEl.classList.add('.item')

  items.push(ingredientsItemEl)
}

const ingredientsListEl = document.querySelector('#ingredients')
ingredientsListEl.append(...items)