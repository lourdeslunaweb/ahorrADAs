var editOpBtn = document.getElementsByClassName("edit-op-btn");
editOpBtn.addEventListener("click", function (e) {
    var storage = getStorage();
    var categories = storage.categories;
    var newCatName = catToEdit.value;
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        if (category.name === oldCatName) {
            category.name = newCatName;
        }
    }
    localStorage.setItem('to-storage', JSON.stringify(storage));
    refreshCategoryTable();
});
