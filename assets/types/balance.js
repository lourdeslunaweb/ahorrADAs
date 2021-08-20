// Set Variables of balance
var emptyOps = document.getElementById("empty-ops");
var loadedOps = document.getElementById("loaded-ops");
var operationRow = document.getElementById("operation-row");
//Create Operation Row
var createOpRow = function () {
    var storage = getStorage();
    for (var _i = 0, _a = storage.operations; _i < _a.length; _i++) {
        var operation = _a[_i];
        // Create row div and set class
        var rowOpDiv = document.createElement("div");
        rowOpDiv.className = "row mt-1";
        // Create description column as first col, its text node and set class
        var firstCol = document.createElement("div");
        firstCol.className = "col-2";
        var descriptionOp = document.createTextNode("Va descripcion");
        // Create category column as second col, its text node and set class
        var secondCol = document.createElement("div");
        secondCol.className = "col-2";
        var categoryOp = document.createTextNode("Va categoria");
        // Create date column as third col, its text node and set class
        var thirdCol = document.createElement("div");
        thirdCol.className = "col-2";
        var dateOp = document.createTextNode("Va fecha");
        // Create amount column as fourth col, its text node and set class
        var fourthCol = document.createElement("div");
        fourthCol.className = "col-2";
        var amountOp = document.createTextNode("Va monto");
        // Create action column as fifth col, its text node and set class
        var fifthCol = document.createElement("div");
        fifthCol.className = "col-2";
        var actionOp = document.createTextNode("Va acciones");
        // Append child node text into columns
        firstCol.appendChild(descriptionOp);
        secondCol.appendChild(categoryOp);
        thirdCol.appendChild(dateOp);
        fourthCol.appendChild(amountOp);
        fifthCol.appendChild(actionOp);
        // Append child columns into row operation div
        rowOpDiv.appendChild(firstCol);
        rowOpDiv.appendChild(secondCol);
        rowOpDiv.appendChild(thirdCol);
        rowOpDiv.appendChild(fourthCol);
        rowOpDiv.appendChild(fifthCol);
        operationRow.appendChild(rowOpDiv);
    }
};
createOpRow();
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
