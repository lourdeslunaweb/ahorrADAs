const editOpBtn = document.getElementsByClassName("edit-op-btn");



editOpBtn.addEventListener("click", e => {
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