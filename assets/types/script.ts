// const fecha = document.getElementById('filter-date');
// console.log(fecha);
type LocalStorage ={
    categories: Category[],
    operations: Operation[],
    balance: Balance[],
}

type Balance = {
    profits: number,
    expenses: number,
    total: number,
}

type Category = {
    name: string,
    slug ?: string,
}
type Operation = {
    description: string,
    category: Category,
    date: string,
    amount: number,
    type ?: 'Gasto' | 'Ganancia',
    actions ?: 'Editar' | 'Eliminar',
}
type Filter = {
    display: boolean,
    type: 'Todos' | 'Gastos' |'Ganancias',
    category : Category,
    since: string,
    sortby: 'Más reciente' | 'Menos reciente' |'Mayor monto' | 'Menor monto' | 'A-Z' |'Z-A',
}
const getStorage = (): LocalStorage => {
    let storage: LocalStorage = JSON.parse(localStorage.getItem('to-storage'));

    if(!storage) {
    storage = {
        categories: [],
        operations: [],
        balance: []
    } 
    }

    return storage;
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
