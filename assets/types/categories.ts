const newCatForm = document.getElementById ("newcat-form");
const inputCat = document.getElementById ("input-cat");

const categories : Category = {
    name:'',
    slug:'',
}

// Create new category
// Ver como crear los divs de create category

const categoryCont = document.getElementById("cont-category");
const categoryList = ["comida","servicios","salidas","educacion","transporte","trabajo"];

const createCategoryRow = (name) => {
    
    let categoryText = document.createTextNode(name);
    const categoryDiv = document.createElement("div");
    const divNewCat = document.createElement("div");
    const divActions = document.createElement("div");
    const editCat = document.createElement("a");
    const removeCat = document.createElement("a");
    const editLink = document.createTextNode("Editar");
    const removeLink = document.createTextNode("Eliminar");

    categoryCont.appendChild(categoryDiv);
    categoryDiv.classList.add("row");
    categoryDiv.classList.add("mt-5");
    categoryDiv.appendChild(divNewCat);
    categoryDiv.appendChild(divActions);
    divNewCat.appendChild(categoryText);
    divNewCat.classList.add("fw-bold");
    divNewCat.classList.add("col-8");
    divActions.appendChild(editCat);
    divActions.appendChild(removeCat);
    divActions.classList.add("col-4");
    divActions.classList.add("d-flex");
    divActions.classList.add("justify-content-around");
    editCat.appendChild(editLink);
    editCat.setAttribute("href","./edit_cat.html");
    editCat.classList.add("text-success");
    removeCat.appendChild(removeLink);
    removeCat.setAttribute("href","#"); // Hacer despues funcion que remueva
    removeCat.classList.add("text-danger");
}

// Crear la función que muestre las categorías por defecto

newCatForm.addEventListener('submit',(e) => {

    e.preventDefault();
          
    categories.name = inputCat.value;
    categories.slug = slugify(inputCat.value);
    
    const storage = getStorage();

    storage.categories.push(categories);
    localStorage.setItem('to-storage', JSON.stringify(storage));
    createCategoryRow(categories.name);
    newCatForm.reset();

    return categories;
})

const init = () => {

    const storage = getStorage();

    for(const category of storage.categories) {
        createCategoryRow(category.name)
    }
}

init()

// EDIT CATEGORIES

