// Set Variables in Edit Operations
//Params
const params = new URLSearchParams(window.location.search);
const descToEditValue = params.get("descriptionOp");
const amountToEditValue = params.get("amountOp");
const typeToEditValue = params.get("typeOp");
const categoryToEditValue = params.get("categoryOp");
const dateToEditValue = params.get("dateOp");
// Create nodes with id
const descToEdit = document.getElementById("desc-to-edit");
const amountToEdit = document.getElementById("amount-to-edit");
const typeToEdit = document.getElementById("type-to-edit");
const dateToEdit = document.getElementById("date-to-edit");
const editOpBtn = document.getElementById("edit-op-btn");
const categoryToEdit = document.getElementById("category-to-edit");
// Set values from get params
descToEdit.value = `${descToEditValue}`;
amountToEdit.value = `${amountToEditValue}`;
typeToEdit.value = `${typeToEditValue}`;
categoryToEdit.value = `${categoryToEditValue}`;
dateToEdit.value = `${dateToEditValue}`;
//Save old values in variables
let oldDescription = descToEdit.value;
let oldAmount = amountToEdit.value;
let oldType = typeToEdit.value;
let oldCategory = categoryToEdit.value;
let oldDate = dateToEdit.value;


// Up Date the categories of the operations
// upDateCatOps()

// Edit Operation
editOpBtn.addEventListener("click", e => {
    e.preventDefault()
    console.log("click editar")
    const storage = getStorage();
    const {operations} = storage;
    let newDescription = descToEdit.value;
    let newAmount = amountToEdit.value;
    let newType = typeToEdit.value;
    let newCategory = categoryToEdit.value;
    let newDate = dateToEdit.value;
    for(let operation of operations) {
        if(operation.description === oldDescription) {
            operation.description = newDescription;
        }
        else if(operation.amount === oldAmount){
            operation.amount = newAmount;
        } else if (operation.type === oldType ){
            operation.type = newType;
        } else if (operation.category === oldCategory){
            operation.category = newCategory
        } else if (operation.date === oldDate){
            operation.date = newDate;
        }
    }
    localStorage.setItem('to-storage', JSON.stringify(storage));
    // refreshOperationTable()
    // window.location.href = "./index.html"
})