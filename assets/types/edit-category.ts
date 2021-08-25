
// Set variables of edit categories
const params = new URLSearchParams(window.location.search);
const catToEdit = document.getElementById("cat-to-edit");
const catToEditName = params.get("catName");
catToEdit.value = `${catToEditName}`;
let oldCatName = catToEdit.value;
const editCatBtn = document.getElementById("edit-cat-btn")

// Edit category name event
editCatBtn.addEventListener("click", e => {
    const storage = getStorage();
    const {categories} = storage;
    let newCatName = catToEdit.value;
    for(let category of categories) {
        if(category.name === oldCatName) {
            category.name = newCatName
        }
    }
    localStorage.setItem('to-storage', JSON.stringify(storage));
    refreshCategoryTable()
})