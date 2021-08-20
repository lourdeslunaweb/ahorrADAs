// Set Variables of balance
const emptyOps = document.getElementById("empty-ops");
const loadedOps = document.getElementById("loaded-ops");
const operationRow = document.getElementById("operation-row");

//Create Operation Row
const createOpRow = () => {
    const storage = getStorage();
    for (let operation of storage.operations) {
        // Create row div and set class
        const rowOpDiv = document.createElement("div");
        rowOpDiv.className = "row mt-1";
        // Create description column, its text node and set class
        const descriptionCol = document.createElement("div");
        descriptionCol.className = "col-2";
        const descriptionOp = document.createTextNode(operation.description);
        // Create category column, its text node and set class
        const categoryCol = document.createElement("div");
        categoryCol.className = "col-2";
        const categoryOp = document.createTextNode(operation.category);
        // Create date column, its text node and set class
        const dateCol = document.createElement("div");
        dateCol.className = "col-2";
        const dateOp = document.createTextNode(operation.date);
        // Create amount column, its text node and set class
        const amountCol = document.createElement("div");
        amountCol.className = "col-2";
        const amountOp = document.createTextNode(operation.amount);
        // Create action column,  two text node (edit and remove) and set class
        const actionCol = document.createElement("div");
        actionCol.className = "col-4 flex-row fs-6 text";
        const editOp = document.createTextNode("Editar");
        editOp.className = "text-success me-3";
        const removeOp = document.createTextNode("Eiminar");
        removeOp.className = "text-danger";
        // Append child node text into columns
        descriptionCol.appendChild(descriptionOp);
        categoryCol.appendChild(categoryOp);
        dateCol.appendChild(dateOp);
        amountCol.appendChild(amountOp);
        actionCol.appendChild(editOp);
        actionCol.appendChild(removeOp);
        // Append child columns into row
        rowOpDiv.appendChild(descriptionCol);
        rowOpDiv.appendChild(categoryCol);
        rowOpDiv.appendChild(dateCol);
        rowOpDiv.appendChild(amountCol);
        rowOpDiv.appendChild(actionCol);
        // Append child row into Row Operation Div
        operationRow.appendChild(rowOpDiv)
    }
}

createOpRow()

// Initial function of balance
const initBalance = () => {
    const storage = getStorage();
    const { operations } = storage;

    if (operations.length > 0) {
        emptyOps.classList.add("d-none");
        loadedOps.classList.remove("d-none");
    } else {
        emptyOps.classList.remove("d-none");
        loadedOps.classList.add("d-none");
    }
}
initBalance()