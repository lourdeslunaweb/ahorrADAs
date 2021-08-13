const newCatForm = document.getElementById ("newcat-form");
const inputCat = document.getElementById ("input-cat");
const removeBtns = document.getElementsByClassName ("remove-cat");

// Object "categories"

const categories : Category = {
    name:'',
    slug:'',
}

// Create new category

const categoriesGrid = document.getElementById("categories-grid");

const createCategoryRow = (name) => {
    
    categoriesGrid.innerHTML = " "; //QUEDA PENDIENTE! 
    
    
    let categoryText = document.createTextNode(name);
    const categoryDiv = document.createElement("div");
    const divNewCat = document.createElement("div");
    const divActions = document.createElement("div");
    const editCat = document.createElement("a");
    const removeCat = document.createElement("a");
    const editLink = document.createTextNode("Editar");
    const removeLink = document.createTextNode("Eliminar");

    categoriesGrid.appendChild(categoryDiv);

    categoryDiv.classList.add("row");
    categoryDiv.classList.add("mt-3");
    categoryDiv.appendChild(divNewCat);
    categoryDiv.appendChild(divActions);
    categoryDiv.setAttribute("id",generateId(10));

    divNewCat.appendChild(categoryText);
    divNewCat.dataset.name = name;
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
    removeCat.setAttribute("class","text-danger remove-cat"); 
    console.log("funciona")

    const storage = getStorage();
    

}

// Show new categories on screen / Set Local Storage new data:

newCatForm.addEventListener('submit',(e) => {

    e.preventDefault();

    const storage = getStorage();
    
    categories.name = inputCat.value;
    categories.slug = slugify(inputCat.value);
    
    storage.categories.push(categories);
    
    createCategoryRow(categories.name);
    
    localStorage.setItem('to-storage', JSON.stringify(storage));

    newCatForm.reset();

    return categories;
})

// Local Storage init function:

const init = () => {
    const storage = getStorage();
    for(const category of storage.categories) {
        createCategoryRow(category.name)
    }
}

init()

// Remove categories from screen:

const removeFunction = removeBtns => {   
    for(let button of removeBtns) {
        let divButton = button.parentElement;
        let divRow = divButton.parentElement;
        const targetName = divRow.firstChild;
        let dataName = targetName.getAttribute("data-name");
        button.addEventListener("click", e => {            
            const storage = getStorage();
            const {categories} = storage;            
            const categoriesUpdate = categories.filter(category => dataName !== category.name)
            for(let category of categories){
                createCategoryRow(category.name)
            }           
            localStorage.setItem('to-storage', JSON.stringify({...storage, categories: categoriesUpdate}));
        })
    }
}

removeFunction(removeBtns)

// localStorage.removeItem('categories');


// Remove categories from Local Storage:
// to-storage



// EDIT CATEGORIES

