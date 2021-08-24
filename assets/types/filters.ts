/*************
 * 
 * FILTROS
 *
 * **********/ 

// TIPO


//   const filtrarPorMes = (mes, anio, operaciones) => {
//     return operaciones.filter((operacion) => {
//       const fecha = new Date(operacion.fecha)
//       return fecha.getFullYear() === anio && fecha.getMonth() === mes
//     })
//   }
  

  
//   const ordernarPorMonto = (operaciones, orden) => {
//     return [...operaciones].sort((a, b) => {
//       return orden === 'ASC' ? a.monto - b.monto : b.monto - a.monto
//     })
//   }
  
//   const ordernarPorDescripcion = (operaciones, orden) => {
//     return [...operaciones].sort((a, b) => {
//       const fechaA = new Date(a)
//       const fechaB = new Date(b)
//       return orden === 'ASC'
//         ? fechaA.getTime() < fechaB.getTime()
//         : fechaA.getTime() > fechaB.getTime()
//     })
//   }

//   const obtenerDatos = () => {
//     return JSON.parse(localStorage.getItem('datos'))
//   }

//   const obtenerOperaciones = () => {
//     return obtenerDatos().operaciones
//   }

//   const obtenerOperacion = (idOperacion, operaciones) => {
//     return operaciones.find((operacion) => operacion.id === idOperacion)
//   }

//-------------------------------------------------------------------------------------------

const selectCategory = document.getElementById("select-category");
const selectType = document.getElementById("type-filter");
const selectSort = document.getElementById("select-sort");

// Se puede usar la misma función que se usa en updateCatOp?
const updateCatFilter = () =>{
    const storage = getStorage();
    for (let category of storage.categories){
        const optionCat = document.createElement("option");
        const optionCatText = document.createTextNode(`${category.name}`);
        optionCat.setAttribute('value', `${category.name}`);
        optionCat.appendChild(optionCatText);
        selectCategory.appendChild(optionCat)
    }
}
// Englobar en un inicializador?
updateCatFilter()

const typeFilter = (typeValue, operations) => {
    return operations.filter(operation => operation.type === typeValue)
}

const categoryFilter = (categoryValue, operations) => {
    return operations.filter((operation) => operation.category === categoryValue)
}

// const filterDate = document.getElementById("filter-date");

// const dateFilter = (date,operations) => {
//     return operations.filter((operation) => {
//         const opDate = new Date(operation.date)
//         return opDate.getTime() >= date.getTime()
//     })
// }

  const ordernarPorFecha = (operations, sortValue) => {
    return [...operations].sort((a, b) => {
      const fechaA = new Date(a.fecha)
      const fechaB = new Date(b.fecha)
      return sortValue === 'ASC'
        ? fechaA.getTime() - fechaB.getTime()
        : fechaB.getTime() - fechaA.getTime()
    })
  }

//------------------------------------------------------------------------------

const operationsFilter = () => {
    const storage = getStorage()
    const typeValue = selectType.value;
    const categoryValue = selectCategory.value;
    const sortValue = selectSort.value;
    // const orden = $('#filtro-orden').value
    let {operations} = storage;

    // BY TYPE

    if (typeValue !== 'Todos') {
        operations = typeFilter(typeValue, operations)
        console.log(operations)
    }

    // BY CATEGORY

    if (categoryValue !== 'Todas') {
        operations = categoryFilter(categoryValue, operations)
        console.log(operations)
    }
  
    // BY DATE

    // operations = dateFilter(inputDate, operations);
    // console.log(operations)

    // ORDERNAR POR...
  
    switch (sortValue) {
      case "mas-recientes":
        operations = ordernarPorFecha(operations, 'DESC');
        console.log(operations)
        break
      case "menos-recientes":
        operations = ordernarPorFecha(operations, 'ASC')
        break
    //   case "mayor-monto":
    //     operations = ordernarPorMonto(operations, 'DESC')
    //     break
    //   case "menor-monto":
    //     operations = ordernarPorMonto(operations, 'ASC')
    //     break
    //   case "a-z":
    //     operations = ordernarPorDescripcion(operations, 'ASC')
    //     break
    //   case "z-a":
    //     operations = ordernarPorDescripcion(operations, 'DESC')
    //     break
      default:
    }
  
    // actualizarOperaciones(operations)
    // actualizarBalance(operations)
  }

const filters = () => {
    selectType.addEventListener("change", operationsFilter)
    selectCategory.addEventListener("change", operationsFilter)
    // filterDate.addEventListener("change", operationsFilter)
    selectSort.addEventListener("change", operationsFilter)
}

filters()








/* ORDENAR POR:

// Más reciente


// Menos reciente


// Mayor monto


// Menor monto


// A/Z


// Z/A


*/


// OCULTAR FILTROS