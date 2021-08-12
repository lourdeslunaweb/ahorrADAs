var newCatForm = document.getElementById("newcat-form");
var inputCat = document.getElementById("input-cat");
var removeBtns = document.getElementsByClassName("remove-cat");
console.log(removeBtns);
// Object "categories"
var categories = {
    name: '',
    slug: ''
};
// Create new category
var categoryCont = document.getElementById("cont-category");
var categoryList = ["comida", "servicios", "salidas", "educacion", "transporte", "trabajo"];
var createCategoryRow = function (name) {
    var categoryText = document.createTextNode(name);
    var categoryDiv = document.createElement("div");
    var divNewCat = document.createElement("div");
    var divActions = document.createElement("div");
    var editCat = document.createElement("a");
    var removeCat = document.createElement("a");
    var editLink = document.createTextNode("Editar");
    var removeLink = document.createTextNode("Eliminar");
    categoryCont.appendChild(categoryDiv);
    categoryDiv.classList.add("row");
    categoryDiv.classList.add("mt-3");
    categoryDiv.appendChild(divNewCat);
    categoryDiv.appendChild(divActions);
    categoryDiv.setAttribute("id", generateId(10));
    divNewCat.appendChild(categoryText);
    divNewCat.classList.add("fw-bold");
    divNewCat.classList.add("col-8");
    divActions.appendChild(editCat);
    divActions.appendChild(removeCat);
    divActions.classList.add("col-4");
    divActions.classList.add("d-flex");
    divActions.classList.add("justify-content-around");
    editCat.appendChild(editLink);
    editCat.setAttribute("href", "./edit_cat.html");
    editCat.classList.add("text-success");
    removeCat.appendChild(removeLink);
    removeCat.setAttribute("href", "#"); // Hacer despues funcion que remueva
    removeCat.setAttribute("class", "text-danger remove-cat");
};
// Show new categories on screen / Set Local Storage new data:
newCatForm.addEventListener('submit', function (e) {
    var storage = getStorage();
    e.preventDefault();
    categories.name = inputCat.value;
    categories.slug = slugify(inputCat.value);
    storage.categories.push(categories);
    localStorage.setItem('to-storage', JSON.stringify(storage));
    createCategoryRow(categories.name);
    newCatForm.reset();
    return categories;
});
// Local Storage init function:
var init = function () {
    var storage = getStorage();
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        createCategoryRow(category.name);
    }
};
init();
// Remove categories from screen:
var removeFunction = function (removeBtns) {
    var _loop_1 = function (button) {
        var divButton = button.parentElement;
        var divRow = divButton.parentElement;
        button.addEventListener("click", function (e) {
            divButton.remove();
            divRow.remove();
            // localStorage.removeItem('categories');
        });
    };
    for (var _i = 0, removeBtns_1 = removeBtns; _i < removeBtns_1.length; _i++) {
        var button = removeBtns_1[_i];
        _loop_1(button);
    }
};
removeFunction(removeBtns);
// Remove categories from Local Storage:
// to-storage
// EDIT CATEGORIES
