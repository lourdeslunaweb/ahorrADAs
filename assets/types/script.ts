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
    acciones: 'Editar' | 'Eliminar',
}
type Filter = {
    display: boolean,
    tipo: 'Todos' | 'Gastos' |'Ganancias',
    categoria : Category,
    desde: string,
    ordenar: 'Más reciente' | 'Menos reciente' |'Mayor monto' | 'Menor monto' | 'A-Z' |'Z-A',
}
const filter: Filter = {
    display:true,
    tipo: 'Todos',
    categoria: {nombre: 'comida', slug: ''},
    desde: '3/3/21',
    ordenar: 'Más reciente',
}
const acceder = () => {
    if(filter.ordenar = 'Más reciente'){
        alert('holis')
    }
    else{
        alert('chauchis')
    }
}