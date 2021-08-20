// type Operation = {
//     description: string,
//     category: Category,
//     date: Date,
//     amount: number,
//     type ?: 'Gasto' | 'Ganancia',
//     actions ?: 'Editar' | 'Eliminar',
// }
var newOperation = {
    description: '',
    amount: 0,
    type: 'Gasto',
    category: '',
    date: ''
};
var newOpForm = document.getElementById("newOp-form");
var newOpDescription = document.getElementById('newOp-description');
var newOpAmount = document.getElementById("newOp-amount");
var newOpType = document.getElementById("newOp-type");
var newOpDate = document.getElementById("newOp-date");
var submitNewOp = document.getElementById("submit-newOp");
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
    // localStorage.setItem('to-storage', JSON.stringify(storage))
};
newOpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var storage = getStorage();
    newOperation.description = newOpDescription.value;
    newOperation.amount = newOpAmount.value;
    newOperation.type = newOpType.value;
    newOperation.category = newOpCategory.value;
    newOperation.date = newOpDate.value;
    storage.operations.push(newOperation);
    localStorage.setItem('to-storage', JSON.stringify(storage));
    newOpForm.reset();
    window.location.href = "./index.html";
    // checkOps()
});
var initOperations = function () {
    getStorage();
    upDateCatOps();
};
initOperations();
// const checkOps = () => {
//     const storage = getStorage();
//     const {operations} = storage;
//     console.log(operations.length);
//     operations.length === 0? emptyOps.classList.remove("d-none") : emptyOps.classList.add("d-none");
//    operations.length === 0? loadedOps.classList.add("d-none") : loadedOps.classList.remove("d-none");
// }
// checkOps()
// newOpDescription.addEventListener('focusout',(e) => {
//     const form = e.target;
//     const newCategoryName: string = form.value;
//     console.log(newCategoryName)
//     newOperation.description = newCategoryName
// }
// )
