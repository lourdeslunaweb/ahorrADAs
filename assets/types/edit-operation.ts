const params = new URLSearchParams(window.location.search);
const descToEditName = params.get("descriptionOp");
const amountToEditValue = params.get("amountOp");
const amountToEditValue = params.get("amountOp");
const amountToEditValue = params.get("amountOp");

const descToEdit = document.getElementById("desc-to-edit");
const amountToEdit = document.getElementById("amount-to-edit")
descToEdit.value = `${descToEditName}`;
amountToEdit.value = `${amountToEditValue}`
let oldDescName = descToEdit.value;
let oldAmount = amountToEdit.value;
const editOpBtn = document.getElementById("edit-op-btn");

upDateCatOps()

editOpBtn.addEventListener("click", e => {
    const storage = getStorage();
    const {operations} = storage;
    let newDescName = descToEdit.value;
    let newAmount = amountToEdit.value;
    for(let operation of operations) {
        if(operation.name === oldDescName) {
            operation.name = newDescName;
        }
        else if(operation.amount === oldAmount){
            operation.amount = newAmount;
        }
    }
    localStorage.setItem('to-storage', JSON.stringify(storage));
    refreshOperationTable()
})