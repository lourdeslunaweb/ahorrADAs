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
// Remove categories from screen:
var removeCategory = function (e) {
    // let divButton = button.parentElement;
    // let divRow = divButton.parentElement;
    // const targetName = divRow.firstChild;
    // let dataName = targetName.getAttribute("data-name");
    var idCategory = e.target.dataset.id;
    var storage = getStorage();
    var categories = storage.categories;
    var categoriesUpdate = categories.filter(function (category) { return idCategory !== category.id; });
    localStorage.setItem('to-storage', JSON.stringify(__assign(__assign({}, storage), { categories: categoriesUpdate })));
    refreshCategoryTable();
};
// Create new category
var categoriesGrid = document.getElementById("categories-grid");
var refreshCategoryTable = function () {
    categoriesGrid.innerHTML = " "; //QUEDA PENDIENTE! 
    var storage = getStorage();
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var categoryText = document.createTextNode(category.name);
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
        removeCat.addEventListener("click", removeCategory);
        removeCat.setAttribute("href", "#"); // Hacer despues funcion que remueva
        removeCat.setAttribute("class", "text-danger remove-cat");
        removeCat.dataset.id = "" + category.id;
    }
};
// Show new categories on screen / Set Local Storage new data:
newCatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var storage = getStorage();
    storage.categories.push({
        name: inputCat.value,
        slug: slugify(inputCat.value),
        id: storage.categories[storage.categories.length - 1].id + 1
    });
    localStorage.setItem('to-storage', JSON.stringify(storage));
    refreshCategoryTable();
    newCatForm.reset();
});
// Local Storage init function:
var init = function () {
    getStorage();
    refreshCategoryTable();
};
init();
// localStorage.removeItem('categories');
// Remove categories from Local Storage:
// to-storage
// EDIT CATEGORIES
