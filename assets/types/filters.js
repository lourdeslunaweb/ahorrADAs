/***********
 *
 * FILTERS
 *
 **********/
var selectType = document.getElementById("type-filter");
var selectCategory = document.getElementById("select-category");
var selectDate = document.getElementById("filter-date");
var selectSort = document.getElementById("select-sort");
// FILTER BY TYPE:
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
// FILTER BY CATEGORY:
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
// FILTER BY DATE:
var dateFilter = function (e) {
    var storage = getStorage();
    var operations = storage.operations;
    var date = new Date(selectDate.value + "T00:00:00").getTime();
    var opFilteredByDate = operations.filter(function (operation) {
        return (new Date(operation.date + "T00:00:00").getTime() >= date);
    });
    refreshOperationTable(opFilteredByDate);
};
// SORT BY :
var sortBy = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var description = storage.operations.description;
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
            operations.sort(function (a, b) {
                if (a.description > b.description) {
                    return 1;
                }
                if (a.description < b.description) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            refreshOperationTable(operations);
            break;
        case "z-a":
            operations.sort(function (b, a) {
                if (a.description > b.description) {
                    return 1;
                }
                if (a.description < b.description) {
                    return -1;
                }
                return 0;
            });
            refreshOperationTable(operations);
            break;
        default:
            refreshOperationTable(operations);
    }
};
// FILTER EVENTS
selectType.addEventListener("change", typeFilter);
selectCategory.addEventListener("change", categoryFilter);
selectDate.addEventListener("change", dateFilter);
selectSort.addEventListener("change", sortBy);
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
