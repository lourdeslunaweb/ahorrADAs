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
        dateCol.className = "col-3";
        const dateOp = document.createTextNode(operation.date);
        // Create amount column, its text node and set class
        const amountCol = document.createElement("div");
        amountCol.className = "col-2";
        const amountOp = document.createTextNode(operation.amount);
        // Create action column,  two text node (edit and remove) and set class
        const actionCol = document.createElement("div");
        actionCol.className = "col-3 d-flex";
        const editOpDiv = document.createElement("div");
        editOpDiv.className = "text-success me-3";
        const editOpText = document.createTextNode("Editar");
        const removeOpDiv = document.createElement("div");
        removeOpDiv.className = "text-danger";
        const removeOpText = document.createTextNode("Eiminar");
        // Append child text node edit and remove into their divs
        editOpDiv.appendChild(editOpText)
        removeOpDiv.appendChild(removeOpText)
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