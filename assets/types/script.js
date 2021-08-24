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
