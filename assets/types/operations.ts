// Set Variables of Operations
const newOperation: Operation = {
    description: '',
    amount: 0,
    type: 'Gasto',
    category: '',
    date: '',
    id: '',
}

const newOpForm = document.getElementById("newOp-form");
const newOpDescription = document.getElementById('newOp-description');
const newOpAmount = document.getElementById("newOp-amount");
const newOpType = document.getElementById("newOp-type");
const newOpDate = document.getElementById("newOp-date");
const submitNewOp = document.getElementById("submit-newOp");
const newOpCategory = document.getElementById("newOp-category");

// Update categories in new_op.html
const upDateCatOps = () =>{
    const storage = getStorage();
    for (let category of storage.categories){
        const optionCat = document.createElement("option");
        optionCat.setAttribute('value', `${category.name}`);
        const optionCatText = document.createTextNode(`${category.name}`);
        optionCat.appendChild(optionCatText);
        newOpCategory.appendChild(optionCat)
    }
}

// Create new operation
newOpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const storage = getStorage();
    newOperation.description = newOpDescription.value;
    newOperation.amount = newOpAmount.value;
    newOperation.type = newOpType.value;
    newOperation.category = newOpCategory.value;
    newOperation.date = newOpDate.value;
    newOperation.id = generateId(10);
    storage.operations.push(newOperation)
    localStorage.setItem('to-storage', JSON.stringify(storage))
    newOpForm.reset()
    window.location.href = "./index.html"
})

// Initial function of operations
const initOperations = () =>{
    getStorage();
    upDateCatOps();
}
initOperations()

