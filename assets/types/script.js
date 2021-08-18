// Generate randoms IDs
var generateId = function (length) {
    var id = '';
    var charts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        id += charts.charAt(Math.floor(Math.random() * charts.length));
    }
    return id;
};
// Get the Local Storage
var getStorage = function () {
    var locStor = JSON.parse(localStorage.getItem('to-storage'));
    if (!locStor) {
        locStor = {
            categories: [
                {
                    name: 'Comida',
                    slug: 'comida',
                    id: generateId(10)
                },
                {
                    name: 'Servicios',
                    slug: 'servicios',
                    id: generateId(10)
                },
                {
                    name: 'Salidas',
                    slug: 'salidas',
                    id: generateId(10)
                },
                {
                    name: 'Transporte',
                    slug: 'transporte',
                    id: generateId(10)
                },
                {
                    name: 'Educación',
                    slug: 'educacion',
                    id: generateId(10)
                },
                {
                    name: 'Trabajo',
                    slug: 'trabajo',
                    id: generateId(10)
                }
            ],
            operations: [],
            balance: []
        };
    }
    return locStor;
};
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
