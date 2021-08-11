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

// Generate randoms IDs

const generateId = (length:number):string => {
    
    let id = '';
    const charts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        id += charts.charAt(Math.floor(Math.random() * charts.length))
    }
    return id;
}

// Get the Local Storage

const getStorage = (): LocalStorage => {   
     
    let locStor: LocalStorage = JSON.parse(localStorage.getItem('to-storage'));

    if(!locStor) {

        locStor = {
            categories: [
                {
                    name:'Comida',
                    slug:'comida',
                },
                {
                    name:'Servicios',
                    slug:'servicios',
                },
                {
                    name:'Salidas',
                    slug:'salidas',
                },
                {
                    name:'Transporte',
                    slug:'transporte',
                },
                {
                    name:'Educación',
                    slug:'educacion',
                },
                {
                    name:'Trabajo',
                    slug:'trabajo',
                }
            ],
            operations: [],
            balance: []
        } 
    }
    return locStor;
}



// let storage = getStorage();



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
