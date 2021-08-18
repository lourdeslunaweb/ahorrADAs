// EDIT CATEGORIES
var params = new URLSearchParams(window.location.search);
var catToEdit = document.getElementById("cat-to-edit");
var catToEditName = params.get("catName");
catToEdit.value = "" + catToEditName;
var oldCatName = catToEdit.value;
console.log(oldCatName);
var editCatBtn = document.getElementById("edit-cat-btn");
editCatBtn.addEventListener("click", function (e) {
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
// console.log(newCatName)
//REVISAR DONDE GENERAMOS IDs! CREO QUE ESTAMOS GENERANDO DOBLEMENTE
