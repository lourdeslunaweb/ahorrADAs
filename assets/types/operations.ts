
// type Operation = {
//     description: string,
//     category: Category,
//     date: Date,
//     amount: number,
//     type ?: 'Gasto' | 'Ganancia',
//     actions ?: 'Editar' | 'Eliminar',
// }

const categories : Category = {
    name:'',
    slug:'',
}
const newOperation: Operation ={
    description: '',
    amount: 0,
    type: 'Gasto',
    category: categories,
    date: '',
}

const newOpForm = document.getElementById ("newOp-form");
const newOpDescription = document.getElementById('newOp-description');
const newOpAmount = document.getElementById("newOp-amount");
const newOpType = document.getElementById ("newOp-type");
const newOpCategory = document.getElementById ("newOp-category");
const newOpDate = document.getElementById ("newOp-date");

let storage = getStorage();

newOpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    newOperation.description= newOpDescription.value;
    newOperation.amount = newOpAmount.value;
    newOperation.type = newOpType.value; 
    newOperation.category = newOpCategory.value;
    newOperation.date = newOpDate.value;

    storage.operations.push(newOperation)
    localStorage.setItem('to-storage', JSON.stringify(storage))
    
    console.log(newOperation)
    
    return newOperation
}
)

// newOpDescription.addEventListener('focusout',(e) => {
//     const form = e.target;
//     const newCategoryName: string = form.value;
//     console.log(newCategoryName)
//     newOperation.description = newCategoryName
// }
// )

