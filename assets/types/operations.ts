
// type Operation = {
//     descripcion: string,
//     categoria: Category,
//     fecha: Date,
//     monto: number,
//     tipo ?: 'Gasto' | 'Ganancia',
//     acciones ?: 'Editar' | 'Eliminar',
// }


const newOpDescription = document.getElementById('newOp-description');
newOpDescription.addEventListener('focusout',(e) => {
    const form = e.target;
    const newCategoryName: string = form.value;
    console.log(newCategoryName)
    
}
)