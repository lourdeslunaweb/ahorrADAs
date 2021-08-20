
// type Operation = {
//     description: string,
//     category: Category,
//     date: Date,
//     amount: number,
//     type ?: 'Gasto' | 'Ganancia',
//     actions ?: 'Editar' | 'Eliminar',
// }

const newOperation: Operation = {
    description: '',
    amount: 0,
    type: 'Gasto',
    category: '',
    date: '',
}

const newOpForm = document.getElementById("newOp-form");
const newOpDescription = document.getElementById('newOp-description');
const newOpAmount = document.getElementById("newOp-amount");
const newOpType = document.getElementById("newOp-type");
const newOpDate = document.getElementById("newOp-date");
const submitNewOp = document.getElementById("submit-newOp");


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
    // localStorage.setItem('to-storage', JSON.stringify(storage))
}

newOpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const storage = getStorage();

    newOperation.description = newOpDescription.value;
    newOperation.amount = newOpAmount.value;
    newOperation.type = newOpType.value;
    newOperation.category = newOpCategory.value;
    newOperation.date = newOpDate.value;

    storage.operations.push(newOperation)
    localStorage.setItem('to-storage', JSON.stringify(storage))
    newOpForm.reset()
    window.location.href = "./index.html"
    
    // checkOps()
})


const initOperations = () =>{
    getStorage();
    upDateCatOps();
}

initOperations()


// const checkOps = () => {
//     const storage = getStorage();
//     const {operations} = storage;
//     console.log(operations.length);
//     operations.length === 0? emptyOps.classList.remove("d-none") : emptyOps.classList.add("d-none");
//    operations.length === 0? loadedOps.classList.add("d-none") : loadedOps.classList.remove("d-none");
    
// }
// checkOps()





// newOpDescription.addEventListener('focusout',(e) => {
//     const form = e.target;
//     const newCategoryName: string = form.value;
//     console.log(newCategoryName)
//     newOperation.description = newCategoryName
// }
// )

