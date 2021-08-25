//Set Type
type LocalStorage = {
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
    slug?: string,
    id: string,
}

type Operation = {
    description: string,
    category: string,
    date: string,
    amount: string,
    type?: 'Gasto' | 'Ganancia',
    actions?: 'Editar' | 'Eliminar',
    id: string,
}

type Filter = {
    display: boolean,
    type: 'Todos' | 'Gasto' | 'Ganancia',
    category: Category,
    since: string,
    sortby: 'Más reciente' | 'Menos reciente' | 'Mayor monto' | 'Menor monto' | 'A-Z' | 'Z-A',
}

// Set a default date

// let inputDate = document.querySelector('input[type="date"]');
// inputDate.valueAsDate = new Date()

// Generate randoms IDs
const generateId = (length: number): string => {
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
    if (!locStor) {
        locStor = {
            categories: [
                {
                    name: 'Comida',
                    slug: 'comida',
                    id: generateId(10),
                },
                {
                    name: 'Servicios',
                    slug: 'servicios',
                    id: generateId(10),
                },
                {
                    name: 'Salidas',
                    slug: 'salidas',
                    id: generateId(10),
                },
                {
                    name: 'Transporte',
                    slug: 'transporte',
                    id: generateId(10),
                },
                {
                    name: 'Educación',
                    slug: 'educacion',
                    id: generateId(10),
                },
                {
                    name: 'Trabajo',
                    slug: 'trabajo',
                    id: generateId(10),
                }
            ],
            operations: [],
            balance: []
        }
    }
    return locStor;
}

