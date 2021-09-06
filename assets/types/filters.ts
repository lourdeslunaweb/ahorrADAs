/***********
 * 
 * FILTERS
 *
 **********/


const selectType = document.getElementById("type-filter");
const selectCategory = document.getElementById("select-category");
const selectDate = document.getElementById("filter-date");
const selectSort = document.getElementById("select-sort");

const typeFilter = () => {
  const storage = getStorage();
  let { operations } = storage;
  const typeValue = selectType.value;
  if (typeValue !== 'Todos') {
    const type = operations.filter(operation => operation.type === typeValue);
    refreshOperationTable(type)
  } else {
    refreshOperationTable(operations)
  }
}

const categoryFilter = () => {
  const storage = getStorage();
  let { operations } = storage;
  const categoryValue = selectCategory.value;
  if (categoryValue !== 'Todas') {
    const cat = operations.filter(operation => operation.category === categoryValue);
    refreshOperationTable(cat)
  } else {
    refreshOperationTable(operations)
  }
}

const dateFilter = () => {
  const storage = getStorage();
  let { operations } = storage;
  const date = new Date(`${selectDate.value}T00:00:00`).getTime();
  const opFilteredByDate = operations.filter(operation => {
    return (new Date(`${operation.date}T00:00:00`).getTime() >= date)
  })
  refreshOperationTable(opFilteredByDate)
}

const sortBy = () => {
  let storage = getStorage();
  let { operations } = storage;
  switch (selectSort.value) {
    case "mas-reciente":
      const moreRecent = operations.sort((a, b) => new Date(`${b.date}T00:00:00`).getTime() - new Date(`${a.date}T00:00:00`).getTime());
      refreshOperationTable(moreRecent)
      break
    case "menos-reciente":
      const lessRecent = operations.sort((a, b) => new Date(`${a.date}T00:00:00`).getTime() - new Date(`${b.date}T00:00:00`).getTime());
      refreshOperationTable(lessRecent)
      break
    case "mayor-monto":
      const greatAmount = operations.sort((a, b) => Number(b.amount) - Number(a.amount));
      refreshOperationTable(greatAmount)
      break
    case "menor-monto":
      const lowerAmount = operations.sort((a, b) => Number(a.amount) - Number(b.amount));
      refreshOperationTable(lowerAmount)
      break
    case "a-z":
      console.log("A - Z");
      break
    case "z-a":
      console.log("z -a ");
      break
    default:
      refreshOperationTable(operations)
  }
}





// const operationsFilter = () => {
//   typeFilter()
//   categoryFilter()
// }


selectType.addEventListener("change", typeFilter)
selectCategory.addEventListener("change", categoryFilter)
selectDate.addEventListener("change", dateFilter)
selectSort.addEventListener("change", sortBy)









// const typeValue = "Gasto";
// const categoryValue = selectCategory.value;
// const sortValue = selectSort.value;







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







// const categoryFilter = (categoryValue, operations) => {
//     return operations.filter((operation) => operation.category === categoryValue)
// }

// const filterDate = document.getElementById("filter-date");

// const dateFilter = (date,operations) => {
//     return operations.filter((operation) => {
//         const opDate = new Date(operation.date)
//         return opDate.getTime() >= date.getTime()
//     })
// }

// const ordernarPorFecha = (operations, sortValue) => {
//   return [...operations].sort((a, b) => {
//     const fechaA = new Date(a.fecha)
//     const fechaB = new Date(b.fecha)
//     return sortValue === 'ASC'
//       ? fechaA.getTime() - fechaB.getTime()
//       : fechaB.getTime() - fechaA.getTime()
//   })
// }

//------------------------------------------------------------------------------



// const orden = $('#filtro-orden').value

// BY TYPE

// if (typeValue !== 'Todos') {
//     typeFilter(typeValue, operations)
//     refreshOperationTable(operations)
//     console.log(operations)
// }

// BY CATEGORY

// if (categoryValue !== 'Todas') {
//     operations = categoryFilter(categoryValue, operations)
//     console.log(operations)
// }

// BY DATE

// operations = dateFilter(inputDate, operations);
// console.log(operations)

// ORDERNAR POR...

// switch (sortValue) {
// case "mas-recientes":
// operations = ordernarPorFecha(operations, 'DESC');
// console.log(operations)
// break
// case "menos-recientes":
// operations = ordernarPorFecha(operations, 'ASC')
// break
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
// default:
// }

// actualizarOperaciones(operations)
// actualizarBalance(operations)
// }
// operationsFilter()

// const filters = () => {
//     selectType.addEventListener("change", operationsFilter)
//     selectCategory.addEventListener("change", operationsFilter)
//     // filterDate.addEventListener("change", operationsFilter)
//     selectSort.addEventListener("change", operationsFilter)
// }

// filters()

// Update categories:

const updateCatFilter = () => {
  const storage = getStorage();
  for (let category of storage.categories) {
    const optionCat = document.createElement("option");
    const optionCatText = document.createTextNode(`${category.name}`);
    optionCat.setAttribute('value', `${category.name}`);
    optionCat.appendChild(optionCatText);
    selectCategory.appendChild(optionCat)
  }
}
updateCatFilter()





