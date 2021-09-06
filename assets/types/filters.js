/***********
 *
 * FILTERS
 *
 **********/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var selectType = document.getElementById("type-filter");
var selectCategory = document.getElementById("select-category");
var selectDate = document.getElementById("filter-date");
var selectSort = document.getElementById("select-sort");
var typeFilter = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var typeValue = selectType.value;
    if (typeValue !== 'Todos') {
        var type = operations.filter(function (operation) { return operation.type === typeValue; });
        refreshOperationTable(type);
    }
    else {
        refreshOperationTable(operations);
    }
};
var categoryFilter = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var categoryValue = selectCategory.value;
    if (categoryValue !== 'Todas') {
        var cat = operations.filter(function (operation) { return operation.category === categoryValue; });
        refreshOperationTable(cat);
    }
    else {
        refreshOperationTable(operations);
    }
};
var dateFilter = function (e) {
    var storage = getStorage();
    var operations = storage.operations;
    var date = new Date(e.target.value + "T00:00:00").getTime();
    var storageDate;
    var opFilteredByDate = operations.filter(function (operation) {
        storageDate = new Date(operation.date + "T00:00:00").getTime();
        return (storageDate >= date);
    });
    refreshOperationTable(opFilteredByDate);
};
var ordernarPorDescripcion = function (operaciones, orden) {
    return __spreadArray([], operaciones).sort(function (a, b) {
        var dateA = new Date(e.target.value + "T00:00:00").getTime();
        var fechaB = new Date(b);
        console.log(fechaA.getTime(), fechaB.getTime());
        return orden === 'a-z'
            ? fechaA.getTime() < fechaB.getTime()
            : fechaA.getTime() > fechaB.getTime();
    });
};
var sortBy = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var selectSortValue = selectSort.value;
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
            operations = ordernarPorDescripcion(operations, selectSortValue);
            // console.log("a-z")
            break;
        case "z-a":
            operations = ordernarPorDescripcion(operations, selectSortValue);
            // console.log("z-a")
            break;
        default:
    }
    refreshOperationTable(operations);
};
selectType.addEventListener("change", typeFilter);
selectCategory.addEventListener("change", categoryFilter);
selectDate.addEventListener("change", dateFilter);
selectSort.addEventListener("change", sortBy);
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
var categoryFilter = function (categoryValue, operations) {
    return operations.filter(function (operation) { return operation.category === categoryValue; });
};
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
var updateCatFilter = function () {
    var storage = getStorage();
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var optionCat = document.createElement("option");
        var optionCatText = document.createTextNode("" + category.name);
        optionCat.setAttribute('value', "" + category.name);
        optionCat.appendChild(optionCatText);
        selectCategory.appendChild(optionCat);
    }
};
updateCatFilter();
