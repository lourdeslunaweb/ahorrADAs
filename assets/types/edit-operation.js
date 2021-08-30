// Set Variables in Edit Operations
//Params
var params = new URLSearchParams(window.location.search);
var descToEditValue = params.get("descriptionOp");
var amountToEditValue = params.get("amountOp");
var amountToEditValue = params.get("amountOp");
var amountToEditValue = params.get("amountOp");
var typeToEditValue = params.get("typeOp");
var categoryToEditValue = params.get("categoryOp");
var dateToEditValue = params.get("dateOp");
// Create nodes with id - Node category is already created as newOpCategory (operations.ts)
var descToEdit = document.getElementById("desc-to-edit");
var amountToEdit = document.getElementById("amount-to-edit");
var typeToEdit = document.getElementById("type-to-edit");
var dateToEdit = document.getElementById("date-to-edit");
var editOpBtn = document.getElementById("edit-op-btn");
// Set values from get params
descToEdit.value = "" + descToEditValue;
amountToEdit.value = "" + amountToEditValue;
typeToEdit.value = "" + typeToEditValue;
newOpCategory.value = "" + categoryToEditValue;
dateToEdit.value = "" + dateToEditValue;
//Save old values in variables
var oldDescription = descToEdit.value;
var oldAmount = amountToEdit.value;
var oldType = typeToEdit.value;
var oldCategory = newOpCategory.value;
var oldDate = dateToEdit.value;
// Up Date the categories of the operations
upDateCatOps();
// Edit Operation
editOpBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var storage = getStorage();
    var operations = storage.operations;
    var newDescription = descToEdit.value;
    var newAmount = amountToEdit.value;
    var newType = typeToEdit.value;
    var newCategory = newOpCategory.value;
    var newDate = dateToEdit.value;
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        if (operation.description === oldDescription) {
            operation.description = newDescription;
            operation.amount = newAmount;
            operation.type = newType;
            operation.category = newCategory;
            operation.date = newDate;
        }
    }
    localStorage.setItem('to-storage', JSON.stringify(storage));
    window.location.href = "./index.html";
});
