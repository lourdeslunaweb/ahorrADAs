// Set Variables of balance
var emptyOps = document.getElementById("empty-ops");
var loadedOps = document.getElementById("loaded-ops");
var operationRowGrid = document.getElementById("operation-row-grid");
//Create New Operation Row
var refreshOperationTable = function () {
    operationRowGrid.innerHTML = " ";
    var storage = getStorage();
    for (var _i = 0, _a = storage.operations; _i < _a.length; _i++) {
        var operation = _a[_i];
        // Create row div and set class
        var rowOpDiv = document.createElement("div");
        rowOpDiv.className = "row mt-1";
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
        editOpDiv.className = "text-success me-3 edit-op-btn";
        var editOpText = document.createTextNode("Editar");
        var removeOpDiv = document.createElement("div");
        removeOpDiv.className = "text-danger remove-op-btn";
        var removeOpText = document.createTextNode("Eiminar");
        // Set id to remove div 
        removeOpDiv.dataset.id = "" + operation.id;
        // Append child text node edit and remove into their divs
        editOpDiv.appendChild(editOpText);
        removeOpDiv.appendChild(removeOpText);
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
    }
};
refreshOperationTable();
// Initial function of balance
var initBalance = function () {
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
initBalance();
