// type Operation = {
//     descripcion: string,
//     categoria: Category,
//     fecha: Date,
//     monto: number,
//     tipo ?: 'Gasto' | 'Ganancia',
//     acciones ?: 'Editar' | 'Eliminar',
// }
var newOpDescription = document.getElementById('newOp-description');
newOpDescription.addEventListener('focusout', function (e) {
    var form = e.target;
    var newCategoryName = form.value;
    console.log(newCategoryName);
});
