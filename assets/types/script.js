var getStorage = function () {
    var storage = JSON.parse(localStorage.getItem('to-storage'));
    if (!storage) {
        storage = {
            categories: [],
            operations: [],
            balance: []
        };
    }
    console.log(storage);
    return storage;
};
localStorage.setItem('fb-session-token', "klsañjñlkjviodafjlkñaksjdlkvmñlsdilaidslf");
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
