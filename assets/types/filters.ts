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
  let {operations} = storage;
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
  let {operations} = storage;
  const categoryValue = selectCategory.value;
  if (categoryValue !== 'Todas') {
    const cat = operations.filter(operation => operation.category === categoryValue);
    refreshOperationTable(cat)
  } else {
    refreshOperationTable(operations)
  }
}

const dateFilter = (e) => {
  const storage = getStorage();
  let {operations} = storage;
  const date = new Date(`${e.target.value}T00:00:00`).getTime();
  let storageDate;
  const opFilteredByDate = operations.filter(operation => { 
    storageDate = new Date(`${operation.date}T00:00:00`).getTime()
    return (storageDate >= date)
  })
  refreshOperationTable(opFilteredByDate)  
}

const ordernarPorDescripcion = (operaciones, orden) => {
  return [...operaciones].sort((a, b) => {
    const dateA = new Date(`${e.target.value}T00:00:00`).getTime();
    const fechaB = new Date(b)
    console.log(fechaA.getTime(),fechaB.getTime())
    return orden === 'a-z'
      ? fechaA.getTime() < fechaB.getTime()
      : fechaA.getTime() > fechaB.getTime()
  })
}

const sortBy = () => {

  let storage = getStorage();
  let {operations} = storage;
  const selectSortValue = selectSort.value

  switch (selectSortValue) {
    // case "mas-recientes":
    //   dateFilter(e)
    //   break
    // case "menos-recientes":
    //   const menosReciente = 
    //   dateFilter(e)
    //   break
    // case "mayor-monto":
    //   operations = ordernarPorMonto(operations, 'DESC')
    //   break
    // case "menor-monto":
    //   operations = ordernarPorMonto(operations, 'ASC')
    //   break
    case "a-z":
      operations = ordernarPorDescripcion(operations, selectSortValue)
      // console.log("a-z")
      break
    case "z-a":
      operations = ordernarPorDescripcion(operations, selectSortValue)
      // console.log("z-a")
      break
    default:
  }
  refreshOperationTable(operations)  

}

    
selectType.addEventListener("change", typeFilter)
selectCategory.addEventListener("change", categoryFilter)
selectDate.addEventListener("change", dateFilter)
selectSort.addEventListener("change",sortBy)







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
  
  // const ordernarPorDescripcion = (operaciones, orden) => {
  //   return [...operaciones].sort((a, b) => {
  //     const fechaA = new Date(a)
  //     const fechaB = new Date(b)
  //     return orden === 'ASC'
  //       ? fechaA.getTime() < fechaB.getTime()
  //       : fechaA.getTime() > fechaB.getTime()
  //   })
  // }

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
updateCatFilter()





