var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var newCatForm = document.getElementById("newcat-form");
var inputCat = document.getElementById("input-cat");
var removeBtns = document.getElementsByClassName("remove-cat");
// Object "categories"
var categories = {
    name: '',
    slug: ''
};
// Create new category
var categoriesGrid = document.getElementById("categories-grid");
var createCategoryRow = function (name) {
    categoriesGrid.innerHTML = " "; //QUEDA PENDIENTE! 
    var categoryText = document.createTextNode(name);
    var categoryDiv = document.createElement("div");
    var divNewCat = document.createElement("div");
    var divActions = document.createElement("div");
    var editCat = document.createElement("a");
    var removeCat = document.createElement("a");
    var editLink = document.createTextNode("Editar");
    var removeLink = document.createTextNode("Eliminar");
    categoriesGrid.appendChild(categoryDiv);
    categoryDiv.classList.add("row");
    categoryDiv.classList.add("mt-3");
    categoryDiv.appendChild(divNewCat);
    categoryDiv.appendChild(divActions);
    categoryDiv.setAttribute("id", generateId(10));
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
    editCat.setAttribute("href", "./edit_cat.html");
    editCat.classList.add("text-success");
    removeCat.appendChild(removeLink);
    removeCat.setAttribute("href", "#"); // Hacer despues funcion que remueva
    removeCat.setAttribute("class", "text-danger remove-cat");
    console.log("funciona");
    var storage = getStorage();
};
// Show new categories on screen / Set Local Storage new data:
newCatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var storage = getStorage();
    categories.name = inputCat.value;
    categories.slug = slugify(inputCat.value);
    storage.categories.push(categories);
    createCategoryRow(categories.name);
    localStorage.setItem('to-storage', JSON.stringify(storage));
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
        var targetName = divRow.firstChild;
        var dataName = targetName.getAttribute("data-name");
        button.addEventListener("click", function (e) {
            var storage = getStorage();
            var categories = storage.categories;
            var categoriesUpdate = categories.filter(function (category) { return dataName !== category.name; });
            for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                var category = categories_1[_i];
                createCategoryRow(category.name);
            }
            localStorage.setItem('to-storage', JSON.stringify(__assign(__assign({}, storage), { categories: categoriesUpdate })));
        });
    };
    for (var _i = 0, removeBtns_1 = removeBtns; _i < removeBtns_1.length; _i++) {
        var button = removeBtns_1[_i];
        _loop_1(button);
    }
};
removeFunction(removeBtns);
// localStorage.removeItem('categories');
// Remove categories from Local Storage:
// to-storage
// EDIT CATEGORIES
