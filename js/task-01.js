const categoriesItemEl = document.querySelectorAll(".item")

console.log(`Number of categories: ${categoriesItemEl.length}`)



const categoriesGroupEl = categoriesItemEl.forEach(category => {

    const itemTitleEl = category.querySelector("h2").textContent

    console.log(`Category: ${itemTitleEl}`)

    const itemListLength = category.querySelectorAll("li").length
    console.log(`Elements: ${itemListLength}`)

    
})
   