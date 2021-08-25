/*****
 *
 * FILTROS
 *
 * ****/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
var selectCategory = document.getElementById("select-category");
var selectType = document.getElementById("type-filter");
var selectSort = document.getElementById("select-sort");
// Se puede usar la misma función que se usa en updateCatOp?
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
// Englobar en un inicializador?
updateCatFilter();
var typeFilter = function (typeValue, operations) {
    return operations.filter(function (operation) { return operation.type === typeValue; });
};
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
var ordernarPorFecha = function (operations, sortValue) {
    return __spreadArray([], operations).sort(function (a, b) {
        var fechaA = new Date(a.fecha);
        var fechaB = new Date(b.fecha);
        return sortValue === 'ASC'
            ? fechaA.getTime() - fechaB.getTime()
            : fechaB.getTime() - fechaA.getTime();
    });
};
//------------------------------------------------------------------------------
var operationsFilter = function () {
    var storage = getStorage();
    var typeValue = selectType.value;
    var categoryValue = selectCategory.value;
    var sortValue = selectSort.value;
    // const orden = $('#filtro-orden').value
    var operations = storage.operations;
    // BY TYPE
    if (typeValue !== 'Todos') {
        operations = typeFilter(typeValue, operations);
        console.log(operations);
    }
    // BY CATEGORY
    if (categoryValue !== 'Todas') {
        operations = categoryFilter(categoryValue, operations);
        console.log(operations);
    }
    // BY DATE
    // operations = dateFilter(inputDate, operations);
    // console.log(operations)
    // ORDERNAR POR...
    switch (sortValue) {
        case "mas-recientes":
            operations = ordernarPorFecha(operations, 'DESC');
            console.log(operations);
            break;
        case "menos-recientes":
            operations = ordernarPorFecha(operations, 'ASC');
            break;
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
};
var filters = function () {
    selectType.addEventListener("change", operationsFilter);
    selectCategory.addEventListener("change", operationsFilter);
    // filterDate.addEventListener("change", operationsFilter)
    selectSort.addEventListener("change", operationsFilter);
};
filters();
/* ORDENAR POR:
// Más reciente
// Menos reciente
// Mayor monto
// Menor monto
// A/Z
// Z/A
*/
// OCULTAR FILTROS
