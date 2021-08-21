var params = new URLSearchParams(window.location.search);
var descToEditName = params.get("descriptionOp");
var amountToEditValue = params.get("amountOp");
var descToEdit = document.getElementById("desc-to-edit");
var amountToEdit = document.getElementById("amount-to-edit");
descToEdit.value = "" + descToEditName;
amountToEdit.value = "" + amountToEditValue;
var oldDescName = descToEdit.value;
var oldAmount = amountToEdit.value;
var editOpBtn = document.getElementById("edit-op-btn");
editOpBtn.addEventListener("click", function (e) {
    var storage = getStorage();
    var operations = storage.operations;
    var newDescName = descToEdit.value;
    var newAmount = amountToEdit.value;
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        if (operation.name === oldDescName) {
            operation.name = newDescName;
        }
        else if (operation.amount === oldAmount) {
            operation.amount = newAmount;
        }
    }
    localStorage.setItem('to-storage', JSON.stringify(storage));
    refreshOperationTable();
});
