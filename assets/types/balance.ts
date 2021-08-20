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
        // Create description column as first col, its text node and set class
        const firstCol = document.createElement("div");
        firstCol.className = "col-2";
        const descriptionOp = document.createTextNode("Va descripcion");
        // Create category column as second col, its text node and set class
        const secondCol = document.createElement("div");
        secondCol.className = "col-2";
        const categoryOp = document.createTextNode("Va categoria");
        // Create date column as third col, its text node and set class
        const thirdCol = document.createElement("div");
        thirdCol.className = "col-2";
        const dateOp = document.createTextNode("Va fecha");
        // Create amount column as fourth col, its text node and set class
        const fourthCol = document.createElement("div");
        fourthCol.className = "col-2";
        const amountOp = document.createTextNode("Va monto");
        // Create action column as fifth col, its text node and set class
        const fifthCol = document.createElement("div");
        fifthCol.className = "col-2";
        const actionOp = document.createTextNode("Va acciones");

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