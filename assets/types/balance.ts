// Set Variables of balance
const emptyOps = document.getElementById("empty-ops");
const loadedOps = document.getElementById("loaded-ops");
const operationRowGrid = document.getElementById("operation-row-grid");
const gainCounter = document.getElementById("gain-counter");
const lossCounter = document.getElementById("loss-counter");
const finalAmount = document.getElementById("final-amount");
//Balance values
let finalGain = 0
let finalLoss = 0

//Remove Operation
const removeOperation = (e) => {
    const idOperation = e.target.dataset.id;
    const storage = getStorage();
    const { operations } = storage;
    const operationsUpdate = operations.filter(operation => idOperation !== operation.id);
    localStorage.setItem('to-storage', JSON.stringify({ ...storage, operations: operationsUpdate }));
    refreshOperationTable();
    initBalance();
}

//Create New Operation Row
const refreshOperationTable = () => {
    operationRowGrid.innerHTML = " ";
    const storage = getStorage();

    for (let operation of storage.operations) {
        // Create row div and set class
        const rowOpDiv = document.createElement("div");
        rowOpDiv.className = "row mt-5 mt-md-3";
        rowOpDiv.setAttribute("id", generateId(10));
        // Create description column, its text node and set class
        const descriptionCol = document.createElement("div");
        descriptionCol.className = "col-4 col-md-2 fw-bolder";
        const descriptionOp = document.createTextNode(operation.description);
        // Create category column, its text node and set class
        const categoryCol = document.createElement("div");
        categoryCol.className = "col-4 col-md-2";
        const categoryOp = document.createTextNode(operation.category);
        // Create date column, its text node and set class
        const options = {month: 'long'}
        const dateCol = document.createElement("div");
        dateCol.className = "col-4 col-md-2";
        const dateOp = document.createTextNode(new Date(operation.date).toLocaleDateString("es-ES", options.month));
        // Create amount column, its text node and set class
        const amountCol = document.createElement("div");
        amountCol.className = "col-4 col-md-2";
        const amountOp = document.createTextNode(operation.amount);
        // Create action column,  two text node (edit and remove) and set class
        const actionCol = document.createElement("div");
        actionCol.className = "col-4 col-md-2 d-flex";
        const editOpDiv = document.createElement("div");
        const editOpLink = document.createTextNode("Editar");
        const editOp = document.createElement("a")
        editOp.className = "text-primary me-3 edit-op-btn fs-6";
        const removeOpDiv = document.createElement("div");
        const removeOpLink = document.createTextNode("Eliminar");
        const removeOp = document.createElement("a")
        removeOp.className = "text-primary remove-op-btn fs-6 text";
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
        // Append child row into Row Operation Div and set Id
        operationRowGrid.appendChild(rowOpDiv);
<<<<<<< HEAD
        operationRowGrid.setAttribute("id",generateId(10));
=======
        operationRowGrid.setAttribute("id", generateId(10));
>>>>>>> 5798b7826c27b71727b8ef613dc1e8e76ccac59a
        // Append child text node edit and remove into their divs
        removeOpDiv.appendChild(removeOp);
        removeOp.appendChild(removeOpLink);
        removeOp.setAttribute("href", "#");
        removeOp.addEventListener('click', removeOperation)
        // Set id to remove div 
        removeOp.dataset.id = `${operation.id}`;
        // Final append child
        editOpDiv.appendChild(editOp);
        editOp.appendChild(editOpLink);
<<<<<<< HEAD
         // Operation type to set in href
         const typeOp = document.createTextNode(operation.type);
=======
        // Operation type to set in href
        const typeOp = document.createTextNode(operation.type);
>>>>>>> 5798b7826c27b71727b8ef613dc1e8e76ccac59a
        // Set class if operation.type is " Gasto" o "Ganancia"
        if (operation.type === "Gasto"){
            amountCol.className = "col-2 text-danger fw-bold";
            amountOp.textContent = `-${operation.amount}`
        } else if (operation.type === "Ganancia"){
            amountCol.className = "col-2 text-success fw-bold";
            amountOp.textContent = `+${operation.amount}`
<<<<<<< HEAD
    }
    // Set href to pass values to params
    editOp.setAttribute("href", `./edit_op.html?descriptionOp=${operation.description}&amountOp=${operation.amount}&typeOp=${operation.type}&categoryOp=${operation.category}&dateOp=${operation.date}`);
=======
        }
        //   Set href to pass values to params
        editOp.setAttribute("href", `./edit_op.html?descriptionOp=${operation.description}&amountOp=${operation.amount}&typeOp=${operation.type}&categoryOp=${operation.category}&dateOp=${operation.date}`);
>>>>>>> 5798b7826c27b71727b8ef613dc1e8e76ccac59a
    }
}

// Check if there's operations or not
const changeIndexImg = () => {
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
// Balance
const balanceCounter = () => {
    const storage = getStorage();    
    for(let operation of storage.operations){
        let value = parseInt(`${operation.amount}`);
        if(operation.type === 'Ganancia'){    
            finalGain += value            
        }
        else if(operation.type === 'Gasto'){
            finalLoss -= value            
        }
    }
    gainCounter.innerHTML = `$ ${finalGain}`;
    lossCounter.innerHTML = `$ ${finalLoss}`; 
    let total = finalLoss + finalGain;
    finalAmount.innerHTML = `$ ${total}`;  
    finalGain = 0
    finalLoss = 0

    localStorage.setItem('to-storage', JSON.stringify({ ...storage, operations: storage.operations }));    
    
}




// Initial function of balance
const initBalance = () => {
    getStorage();
    changeIndexImg();
    refreshOperationTable();
    balanceCounter()
}
initBalance()
