// const fecha = document.getElementById('filter-date');
// console.log(fecha);


type Balance = {
    ganancias: number,
    gastos: number,
    total: number,
}

type Category = {
    nombre: string,
    slug: string,
}
type Operation = {
    descripcion: string,
    categoria: Category,
    fecha: Date,
    monto: number,
    tipo ?: 'Gasto' | 'Ganancia',
    acciones ?: 'Editar' | 'Eliminar',
}
type Filter = {
    display: boolean,
    tipo: 'Todos' | 'Gastos' |'Ganancias',
    categoria : Category,
    desde: string,
    ordenar: 'Más reciente' | 'Menos reciente' |'Mayor monto' | 'Menor monto' | 'A-Z' |'Z-A',
}







// const filter: Filter = {
//     display:true,
//     tipo: 'Todos',
//     categoria: {nombre: 'comida', slug: ''},
//     desde: '3/3/21',
//     ordenar: 'Más reciente',
// }
// console.log(filter.ordenar)
// const acceder = (filter:Filter) => {
//     if(filter.ordenar === 'Más reciente' ){
//         console.log('holis')
//     }
//     else{
//         console.log('chauchis')
//     }
// }
