// type Operation = {
//     description: string,
//     category: Category,
//     date: Date,
//     amount: number,
//     type ?: 'Gasto' | 'Ganancia',
//     actions ?: 'Editar' | 'Eliminar',
// }
var newOperation = {
    description: '',
    amount: 0,
    type: 'Gasto',
    category: {},
    date: 
};
var newOpForm = document.getElementById("newOp-form");
var newOpDescription = document.getElementById('newOp-description');
var newOpAmount = document.getElementById("newOp-amount");
var newOpType = document.getElementById("newOp-type");
var newOpCategory = document.getElementById("newOp-category");
var newOpDate = document.getElementById("newOp-date");
newOpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var form = e.target;
    newOperation.description = newOpDescription.value;
    newOperation.amount = newOpAmount.value;
    newOperation.type = newOpType.value;
    newOperation.category = newOpCategory.value;
    newOperation.date = newOpDate.value;
});
// newOpDescription.addEventListener('focusout',(e) => {
//     const form = e.target;
//     const newCategoryName: string = form.value;
//     console.log(newCategoryName)
//     newOperation.description = newCategoryName
// }
// )
