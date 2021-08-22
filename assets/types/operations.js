// Set Variables of Operations
var newOperation = {
    description: '',
    amount: 0,
    type: 'Gasto',
    category: '',
    date: '',
    id: ''
};
var newOpForm = document.getElementById("newOp-form");
var newOpDescription = document.getElementById('newOp-description');
var newOpAmount = document.getElementById("newOp-amount");
var newOpType = document.getElementById("newOp-type");
var newOpDate = document.getElementById("newOp-date");
var submitNewOp = document.getElementById("submit-newOp");
var newOpCategory = document.getElementById("newOp-category");
// Update categories in new_op.html
var upDateCatOps = function () {
    var storage = getStorage();
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var optionCat = document.createElement("option");
        optionCat.setAttribute('value', "" + category.name);
        var optionCatText = document.createTextNode("" + category.name);
        optionCat.appendChild(optionCatText);
        newOpCategory.appendChild(optionCat);
    }
};
// Create new operation
newOpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var storage = getStorage();
    newOperation.description = newOpDescription.value;
    newOperation.amount = newOpAmount.value;
    newOperation.type = newOpType.value;
    newOperation.category = newOpCategory.value;
    newOperation.date = newOpDate.value;
    newOperation.id = generateId(10);
    storage.operations.push(newOperation);
    localStorage.setItem('to-storage', JSON.stringify(storage));
    newOpForm.reset();
    window.location.href = "./index.html";
});
// Initial function of operations
var initOperations = function () {
    getStorage();
    upDateCatOps();
};
initOperations();
