const newCatForm = document.getElementById ("newcat-form");
const inputCat = document.getElementById ("input-cat");

const categories : Category = {
    name:'',
    slug:'',
}

// Create new category
// Ver como crear los divs de create category

const divNewCat = document.createElement("div");
locStor.categories

newCatForm.addEventListener('submit',(e) => {

    e.preventDefault();

    categories.name = inputCat.value
    categories.slug = slugify(inputCat.value)

    storage.categories.push(categories);
    localStorage.setItem('to-storage', JSON.stringify(storage));

    return categories;

})

// EDIT CATEGORIES

