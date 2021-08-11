var newCatForm = document.getElementById("newcat-form");
var inputCat = document.getElementById("input-cat");
var categories = {
    name: '',
    slug: ''
};
// Create new category
// Ver como crear los divs de create category
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
    editCat.setAttribute("href", "./edit_cat.html");
    editCat.classList.add("text-success");
    removeCat.appendChild(removeLink);
    removeCat.setAttribute("href", "#"); // Hacer despues funcion que remueva
    removeCat.classList.add("text-danger");
};
// Crear la función que muestre las categorías por defecto
newCatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    categories.name = inputCat.value;
    categories.slug = slugify(inputCat.value);
    var storage = getStorage();
    storage.categories.push(categories);
    localStorage.setItem('to-storage', JSON.stringify(storage));
    createCategoryRow(categories.name);
    newCatForm.reset();
    return categories;
});
var init = function () {
    var storage = getStorage();
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        createCategoryRow(category.name);
    }
};
init();
// EDIT CATEGORIES
