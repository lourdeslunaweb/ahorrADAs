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
// Set Variables of balance
var emptyOps = document.getElementById("empty-ops");
var loadedOps = document.getElementById("loaded-ops");
var operationRowGrid = document.getElementById("operation-row-grid");
//Remove Operation
var removeOperation = function (e) {
    var idOperation = e.target.dataset.id;
    var storage = getStorage();
    var operations = storage.operations;
    var operationsUpdate = operations.filter(function (operation) { return idOperation !== operation.id; });
    localStorage.setItem('to-storage', JSON.stringify(__assign(__assign({}, storage), { operations: operationsUpdate })));
    refreshOperationTable();
    initBalance();
};
//Create New Operation Row
var refreshOperationTable = function () {
    operationRowGrid.innerHTML = " ";
    var storage = getStorage();
    for (var _i = 0, _a = storage.operations; _i < _a.length; _i++) {
        var operation = _a[_i];
        // Create row div and set class
        var rowOpDiv = document.createElement("div");
        rowOpDiv.className = "row mt-1";
        rowOpDiv.setAttribute("id", generateId(10));
        // Create description column, its text node and set class
        var descriptionCol = document.createElement("div");
        descriptionCol.className = "col-2";
        var descriptionOp = document.createTextNode(operation.description);
        // Create category column, its text node and set class
        var categoryCol = document.createElement("div");
        categoryCol.className = "col-2";
        var categoryOp = document.createTextNode(operation.category);
        // Create date column, its text node and set class
        var dateCol = document.createElement("div");
        dateCol.className = "col-3";
        var dateOp = document.createTextNode(operation.date);
        // Create amount column, its text node and set class
        var amountCol = document.createElement("div");
        amountCol.className = "col-2";
        var amountOp = document.createTextNode(operation.amount);
        // Create action column,  two text node (edit and remove) and set class
        var actionCol = document.createElement("div");
        actionCol.className = "col-3 d-flex";
        var editOpDiv = document.createElement("div");
        var editOpLink = document.createTextNode("Editar");
        var editOp = document.createElement("a");
        editOp.className = "text-success me-3 edit-op-btn";
        var removeOpDiv = document.createElement("div");
        var removeOpLink = document.createTextNode("Eliminar");
        var removeOp = document.createElement("a");
        removeOp.className = "text-danger remove-op-btn";
        // Append child node text into columns
        descriptionCol.appendChild(descriptionOp);
        categoryCol.appendChild(categoryOp);
        dateCol.appendChild(dateOp);
        amountCol.appendChild(amountOp);
        actionCol.appendChild(editOpDiv);
        actionCol.appendChild(removeOpDiv);
        // Append child columns into row
        rowOpDiv.appendChild(descriptionCol);
        rowOpDiv.appendChild(categoryCol);
        rowOpDiv.appendChild(dateCol);
        rowOpDiv.appendChild(amountCol);
        rowOpDiv.appendChild(actionCol);
        // Append child row into Row Operation Div
        operationRowGrid.appendChild(rowOpDiv);
        operationRowGrid.setAttribute("id", generateId(10));
        // Append child text node edit and remove into their divs
        removeOpDiv.appendChild(removeOp);
        removeOp.appendChild(removeOpLink);
        removeOp.setAttribute("href", "#");
        removeOp.addEventListener('click', removeOperation);
        // Set id to remove div 
        removeOp.dataset.id = "" + operation.id;
        // Final append child
        editOpDiv.appendChild(editOp);
        editOp.appendChild(editOpLink);
        // Operation type to set in href
        var typeOp = document.createTextNode(operation.type);
        //   Set href to pass values to params
        editOp.setAttribute("href", "./edit_op.html?descriptionOp=" + operation.description + "&amountOp=" + operation.amount + "&typeOp=" + operation.type + "&categoryOp=" + operation.category + "&dateOp=" + operation.date);
    }
};
// Check if there's operations or not
var changeIndexImg = function () {
    var storage = getStorage();
    var operations = storage.operations;
    if (operations.length > 0) {
        emptyOps.classList.add("d-none");
        loadedOps.classList.remove("d-none");
    }
    else {
        emptyOps.classList.remove("d-none");
        loadedOps.classList.add("d-none");
    }
};
// Initial function of balance
var initBalance = function () {
    getStorage();
    changeIndexImg();
    refreshOperationTable();
};
initBalance();
