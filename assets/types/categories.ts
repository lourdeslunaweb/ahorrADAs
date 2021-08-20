// Set Variables of Categories
const newCatForm = document.getElementById ("newcat-form");
let inputCat = document.getElementById ("input-cat");
const removeBtns = document.getElementsByClassName ("remove-cat");
const newOpCategory = document.getElementById("newOp-category");
const categoriesGrid = document.getElementById("categories-grid");


// Remove categories from Local Storage:
const removeCategory = (e) => {   
    const idCategory = e.target.dataset.id;
    const storage = getStorage();
    const {categories} = storage;      
    const categoriesUpdate = categories.filter(category => idCategory !== category.id)
    localStorage.setItem('to-storage', JSON.stringify({...storage, categories: categoriesUpdate}));
    refreshCategoryTable()
}


// Create new category
const refreshCategoryTable = () => {
    categoriesGrid.innerHTML = " "; 
    const storage = getStorage();
    for (const category of storage.categories) {
        let categoryText = document.createTextNode(category.name);
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
        divNewCat.classList.add("fw-bold");
        divNewCat.classList.add("col-8");
    
        divActions.appendChild(editCat);
        divActions.appendChild(removeCat);
        divActions.classList.add("col-4");
        divActions.classList.add("d-flex");
        divActions.classList.add("justify-content-around");
    
        editCat.appendChild(editLink);
        editCat.setAttribute("href",`./edit_cat.html?catName=${category.name}`);
        editCat.classList.add("text-success");
        
        removeCat.appendChild(removeLink);
        removeCat.addEventListener("click",removeCategory)
        removeCat.setAttribute("href","#"); 
        removeCat.setAttribute("class","text-danger remove-cat"); 
        removeCat.dataset.id = `${category.id}`;
    }   
    
}


// Show new categories on screen / Set Local Storage new data:
newCatForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const storage = getStorage();
    storage.categories.push({
        name: inputCat.value,
        slug: slugify(inputCat.value),
        id: generateId(10),
    });
    localStorage.setItem('to-storage', JSON.stringify(storage));
    refreshCategoryTable();
    newCatForm.reset();
})

// Local Storage init function:
const initCategories = () => {
    getStorage();
    refreshCategoryTable();
}
initCategories()




