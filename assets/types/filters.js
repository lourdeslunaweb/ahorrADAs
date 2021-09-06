/***********
 *
 * FILTERS
 *
 **********/
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
var dateFilter = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var date = new Date(selectDate.value + "T00:00:00").getTime();
    var opFilteredByDate = operations.filter(function (operation) {
        return (new Date(operation.date + "T00:00:00").getTime() >= date);
    });
    refreshOperationTable(opFilteredByDate);
};
var sortBy = function () {
    var storage = getStorage();
    var operations = storage.operations;
    switch (selectSort.value) {
        case "mas-reciente":
            var moreRecent = operations.sort(function (a, b) { return new Date(b.date + "T00:00:00").getTime() - new Date(a.date + "T00:00:00").getTime(); });
            refreshOperationTable(moreRecent);
            break;
        case "menos-reciente":
            var lessRecent = operations.sort(function (a, b) { return new Date(a.date + "T00:00:00").getTime() - new Date(b.date + "T00:00:00").getTime(); });
            refreshOperationTable(lessRecent);
            break;
        case "mayor-monto":
            var greatAmount = operations.sort(function (a, b) { return Number(b.amount) - Number(a.amount); });
            refreshOperationTable(greatAmount);
            break;
        case "menor-monto":
            var lowerAmount = operations.sort(function (a, b) { return Number(a.amount) - Number(b.amount); });
            refreshOperationTable(lowerAmount);
            break;
        case "a-z":
            console.log("A - Z");
            break;
        case "z-a":
            console.log("z -a ");
            break;
        default:
            refreshOperationTable(operations);
    }
};
// const operationsFilter = () => {
//   typeFilter()
//   categoryFilter()
// }
selectType.addEventListener("change", typeFilter);
selectCategory.addEventListener("change", categoryFilter);
selectDate.addEventListener("change", dateFilter);
selectSort.addEventListener("change", sortBy);
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
