// Set variables of report
var emptyReport = document.getElementById("empty-report-interface");
var loadedReport = document.getElementById("loaded-report-interface");
var reportResumDiv = document.getElementById("report-resume-div");
var totalPerCatDiv = document.getElementById("total-per-category");
var totalPerMonthDiv = document.getElementById("total-per-month");
// *************************
// ** TOTALS PER CATEGORY**
// *************************
// Obtain Totals Per Category Data
var totalPerCategory = function (name) {
    var storage = getStorage();
    var operations = storage.operations;
    // arrCatGroup is an array of objets grouped per categories
    var arrCatGroup = operations.filter(function (operation) {
        return (operation.category === name);
    });
    var totalExpByCat = 0;
    var totalGainByCat = 0;
    var totalBalanceByCat = 0;
    for (var _i = 0, arrCatGroup_1 = arrCatGroup; _i < arrCatGroup_1.length; _i++) {
        var item = arrCatGroup_1[_i];
        if (item.type === "Gasto") {
            totalExpByCat += Number(item.amount);
        }
        else if (item.type === "Ganancia") {
            totalGainByCat += Number(item.amount);
        }
    }
    totalBalanceByCat = totalGainByCat - totalExpByCat;
    return [totalGainByCat, totalExpByCat, totalBalanceByCat];
};
// Create Totals Per Category Table
var createTotalPerCategoryTable = function () {
    var storage = getStorage();
    var categories = storage.categories;
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        // Row for each category
        var rowCat = document.createElement("div");
        rowCat.className = "row mt-3 mt-sm-1";
        // Categiry Name column
        var colName = document.createElement("div");
        colName.className = "col-12 col-sm-3 fw-bold";
        var colNameText = document.createTextNode("" + category.name);
        // Call the function totalPerCategory()
        var arrReportResults = totalPerCategory(category.name);
        var totalGainByCat = arrReportResults[0];
        var totalExpByCat = arrReportResults[1];
        var totalBalanceByCat = arrReportResults[2];
        // Category Gain column
        var colGain = document.createElement("div");
        colGain.className = "col-4 col-sm-3";
        var colGainText = document.createTextNode("$+" + totalGainByCat);
        // Category Expense column
        var colExpense = document.createElement("div");
        colExpense.className = "col-4 col-sm-3";
        var colExpenseText = document.createTextNode("$-" + totalExpByCat);
        // Category Balance colum
        var colBalance = document.createElement("div");
        var colBalanceText = void 0;
        if (totalBalanceByCat >= 0) {
            colBalance.className = "col-4 col-sm-3 text-success";
            colBalanceText = document.createTextNode("$" + totalBalanceByCat);
        }
        else if (totalBalanceByCat < 0) {
            colBalance.className = "col-4 col-sm-3 text-danger";
            colBalanceText = document.createTextNode("$" + totalBalanceByCat);
        }
        //Append child text into div
        colName.appendChild(colNameText);
        colGain.appendChild(colGainText);
        colExpense.appendChild(colExpenseText);
        colBalance.appendChild(colBalanceText);
        //Append child columns into row
        rowCat.appendChild(colName);
        rowCat.appendChild(colGain);
        rowCat.appendChild(colExpense);
        rowCat.appendChild(colBalance);
        // Append child row into Total per Category Div
        totalPerCatDiv.appendChild(rowCat);
    }
};
// ***********************
// ** TOTALS PER MONTH  **
// ***********************
// Totals per month object
var totalPerMonthObj = function (objectData) {
    var totalsPerMonth = {};
    objectData.forEach(function (operation) {
        var date = new Date(operation.date);
        if (!totalsPerMonth[date.getFullYear()]) {
            totalsPerMonth[date.getFullYear()] = {};
        }
        if (!totalsPerMonth[date.getFullYear()][date.getMonth()]) {
            totalsPerMonth[date.getFullYear()][date.getMonth()] = {};
        }
        if (!totalsPerMonth[date.getFullYear()][date.getMonth()][operation.type]) {
            totalsPerMonth[date.getFullYear()][date.getMonth()][operation.type] = 0;
        }
        totalsPerMonth[date.getFullYear()][date.getMonth()][operation.type] += Number(operation.amount);
    });
    return totalsPerMonth;
};
// Create Totals Per Month Table
var createTotalPerMonthTable = function () {
    var storage = getStorage();
    var operations = storage.operations;
    // Call totalPerMonthObj() function to obtain an object with information per year/month
    var totalsPerMonth = totalPerMonthObj(operations);
    // Iterate the object and its props
    for (var year in totalsPerMonth) {
        for (var month in totalsPerMonth[year]) {
            // Row for each year/ month
            var yearRow = document.createElement("div");
            yearRow.className = "row mt-1";
            // First column year and month name
            var firstColDiv = document.createElement("div");
            firstColDiv.className = "col-12 col-sm-3 fw-bold";
            var firstColText = document.createTextNode(year + "/ " + (Number(month) + 1));
            firstColDiv.appendChild(firstColText);
            yearRow.appendChild(firstColDiv);
            totalPerMonthDiv.appendChild(yearRow);
            // // Second column total Gain
            var secondColDiv = document.createElement("div");
            secondColDiv.className = "col-4 col-sm-3";
            var showGain = void 0;
            if (totalsPerMonth[year][month].Ganancia) {
                showGain = totalsPerMonth[year][month].Ganancia;
            }
            else {
                showGain = 0;
            }
            var secondColText = document.createTextNode("$+" + showGain);
            secondColDiv.appendChild(secondColText);
            yearRow.appendChild(secondColDiv);
            totalPerMonthDiv.appendChild(yearRow);
            // Third column total Expense
            var thirdColDiv = document.createElement("div");
            thirdColDiv.className = "col-4 col-sm-3";
            var showExpense = void 0;
            if (totalsPerMonth[year][month].Gasto) {
                showExpense = totalsPerMonth[year][month].Gasto;
            }
            else {
                showExpense = 0;
            }
            var thirdColText = document.createTextNode("$-" + showExpense);
            thirdColDiv.appendChild(thirdColText);
            yearRow.appendChild(thirdColDiv);
            totalPerMonthDiv.appendChild(yearRow);
            // Fourth column Balance
            var fourthColDiv = document.createElement("div");
            var showBalance = showGain - showExpense;
            var fourthColText = void 0;
            if (showBalance >= 0) {
                fourthColDiv.className = "col-4 col-sm-3 text-success";
                fourthColText = document.createTextNode("$" + showBalance);
            }
            else if (showBalance < 0) {
                fourthColDiv.className = "col-4 col-sm-3 text-danger";
                fourthColText = document.createTextNode("$" + showBalance);
            }
            fourthColDiv.appendChild(fourthColText);
            yearRow.appendChild(fourthColDiv);
            totalPerMonthDiv.appendChild(yearRow);
        }
    }
};
// *******************
// ** REPORT SUMMARY**
// *******************
// Totals per category object
var totalPerCategoryObj = function (objectData) {
    var totalsPerCategory = {};
    objectData.forEach(function (operation) {
        if (!totalsPerCategory[operation.category]) {
            totalsPerCategory[operation.category] = {};
        }
        if (!totalsPerCategory[operation.category][operation.type]) {
            totalsPerCategory[operation.category][operation.type] = 0;
        }
        totalsPerCategory[operation.category][operation.type] += Number(operation.amount);
    });
    return totalsPerCategory;
};
// Category Summary
var categorySummary = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var categoryData = totalPerCategoryObj(operations);
    var higherGain = 0;
    var gainCatName;
    var higherExpense = 0;
    var expenseCatName;
    var higherBalance = 0;
    var balanceCatName;
    for (var category in categoryData) {
        if (!categoryData[category].Ganancia) {
            categoryData[category].Ganancia = 0;
        }
        if (!categoryData[category].Gasto) {
            categoryData[category].Gasto = 0;
        }
        var balancePerCat = categoryData[category].Ganancia - categoryData[category].Gasto;
        if (balancePerCat > higherBalance) {
            higherBalance = balancePerCat;
            balanceCatName = category;
        }
        if (categoryData[category].Ganancia > higherGain) {
            higherGain = categoryData[category].Ganancia;
            gainCatName = category;
        }
        if (categoryData[category].Gasto > higherExpense) {
            higherExpense = categoryData[category].Gasto;
            expenseCatName = category;
        }
    }
    return [higherGain, gainCatName, higherExpense, expenseCatName, higherBalance, balanceCatName];
};
// Create Resume Category Table
var createResumCatTable = function () {
    // Call categorySummary()
    var arrCatResults = categorySummary();
    var higherGain = arrCatResults[0];
    var gainCatName = arrCatResults[1];
    var higherExpense = arrCatResults[2];
    var expenseCatName = arrCatResults[3];
    var higherBalance = arrCatResults[4];
    var balanceCatName = arrCatResults[5];
    // create Row 1 "Categoría con mayor ganancia" and its respective columns
    var row1 = document.createElement("div");
    row1.className = "row mt-3";
    // Row 1 Col 1
    var row1Col1 = document.createElement("div");
    row1Col1.className = "col-5 col-sm-6";
    var row1Col1Text = document.createTextNode("Categoría con mayor ganancia");
    row1Col1.appendChild(row1Col1Text);
    row1.appendChild(row1Col1);
    reportResumDiv.appendChild(row1);
    // Row 1 Col 2
    var row1Col2 = document.createElement("div");
    row1Col2.className = "col-4 col-sm-3 text-success";
    var row1Col2Text = document.createTextNode("" + gainCatName);
    row1Col2.appendChild(row1Col2Text);
    row1.appendChild(row1Col2);
    reportResumDiv.appendChild(row1);
    // Row 1 Col 3
    var row1Col3 = document.createElement("div");
    row1Col3.className = "col-3 col-sm-3 text-success";
    var row1Col3Text = document.createTextNode("" + higherGain);
    row1Col3.appendChild(row1Col3Text);
    row1.appendChild(row1Col3);
    reportResumDiv.appendChild(row1);
    // create Row 2 "Categoría con mayor gasto" and its respective columns
    var row2 = document.createElement("div");
    row2.className = "row mt-3 mt-sm-1";
    // Row 2 Col 1
    var row2Col1 = document.createElement("div");
    row2Col1.className = "col-5 col-sm-6";
    var row2Col1Text = document.createTextNode("Categoría con mayor gasto");
    row2Col1.appendChild(row2Col1Text);
    row2.appendChild(row2Col1);
    reportResumDiv.appendChild(row2);
    // Row 2 Col 2
    var row2Col2 = document.createElement("div");
    row2Col2.className = "col-4 col-sm-3 text-danger";
    var row2Col2Text = document.createTextNode("" + expenseCatName);
    row2Col2.appendChild(row2Col2Text);
    row2.appendChild(row2Col2);
    reportResumDiv.appendChild(row2);
    // Row 2 Col 3
    var row2Col3 = document.createElement("div");
    row2Col3.className = "col-3 col-sm-3 text-danger";
    var row2Col3Text = document.createTextNode("" + higherExpense);
    row2Col3.appendChild(row2Col3Text);
    row2.appendChild(row2Col3);
    reportResumDiv.appendChild(row2);
    // create Row 3 "Categoría con mayor balance" and its respective columns
    var row3 = document.createElement("div");
    row3.className = "row mt-3 mt-sm-1";
    // Row 3 Col 1
    var row3Col1 = document.createElement("div");
    row3Col1.className = "col-5 col-sm-6";
    var row3Col1Text = document.createTextNode("Categoría con mayor balance");
    row3Col1.appendChild(row3Col1Text);
    row3.appendChild(row3Col1);
    reportResumDiv.appendChild(row3);
    // Row 3 Col 2
    var row3Col2 = document.createElement("div");
    row3Col2.className = "col-4 col-sm-3";
    var row3Col2Text = document.createTextNode("" + balanceCatName);
    row3Col2.appendChild(row3Col2Text);
    row3.appendChild(row3Col2);
    reportResumDiv.appendChild(row3);
    // Row 3 Col 3
    var row3Col3 = document.createElement("div");
    row3Col3.className = "col-3 col-sm-3";
    var row3Col3Text = document.createTextNode("" + higherBalance);
    row3Col3.appendChild(row3Col3Text);
    row3.appendChild(row3Col3);
    reportResumDiv.appendChild(row3);
};
// Month Summary
var monthSummary = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var totalsPerMonth = totalPerMonthObj(operations);
    var higherGainMonth = 0;
    var gainNameMonth;
    var higherExpenseMonth = 0;
    var expenseNameMonth;
    for (var year in totalsPerMonth) {
        for (var month in totalsPerMonth[year]) {
            if (!totalsPerMonth[year][month].Ganancia) {
                totalsPerMonth[year][month].Ganancia = 0;
            }
            if (!totalsPerMonth[year][month].Gasto) {
                totalsPerMonth[year][month].Gasto = 0;
            }
            if (totalsPerMonth[year][month].Ganancia > higherGainMonth) {
                higherGainMonth = totalsPerMonth[year][month].Ganancia;
                gainNameMonth = year + "/ " + (Number(month) + 1);
            }
            if (totalsPerMonth[year][month].Gasto > higherExpenseMonth) {
                higherExpenseMonth = totalsPerMonth[year][month].Gasto;
                expenseNameMonth = year + "/ " + (Number(month) + 1);
            }
        }
    }
    return [higherGainMonth, gainNameMonth, higherExpenseMonth, expenseNameMonth];
};
// Create Resume Month Table
var createResumMonthTable = function () {
    // Call monthSummary()
    var arrMonthResults = monthSummary();
    var higherGainMonth = arrMonthResults[0];
    var gainNameMonth = arrMonthResults[1];
    var higherExpenseMonth = arrMonthResults[2];
    var expenseNameMonth = arrMonthResults[3];
    // create Row 4 "Mes con mayor ganancia" and its respective columns
    var row4 = document.createElement("div");
    row4.className = "row mt-3 mt-sm-1";
    // Row 4 Col 1
    var row4Col1 = document.createElement("div");
    row4Col1.className = "col-5 col-sm-6";
    var row4Col1Text = document.createTextNode("Mes con mayor ganancia");
    row4Col1.appendChild(row4Col1Text);
    row4.appendChild(row4Col1);
    reportResumDiv.appendChild(row4);
    // Row 4 Col 2
    var row4Col2 = document.createElement("div");
    row4Col2.className = "col-4 col-sm-3";
    var row4Col2Text = document.createTextNode("" + gainNameMonth);
    row4Col2.appendChild(row4Col2Text);
    row4.appendChild(row4Col2);
    reportResumDiv.appendChild(row4);
    // Row 4 Col 3
    var row4Col3 = document.createElement("div");
    row4Col3.className = "col-3 col-sm-3 text-success";
    var row4Col3Text = document.createTextNode("" + higherGainMonth);
    row4Col3.appendChild(row4Col3Text);
    row4.appendChild(row4Col3);
    reportResumDiv.appendChild(row4);
    // create Row 5 "Mes con mayor gasto" and its respective columns
    var row5 = document.createElement("div");
    row5.className = "row mt-3 mt-sm-1";
    // Row 5 Col 1
    var row5Col1 = document.createElement("div");
    row5Col1.className = "col-5 col-sm-6";
    var row5Col1Text = document.createTextNode("Mes con mayor gasto");
    row5Col1.appendChild(row5Col1Text);
    row5.appendChild(row5Col1);
    reportResumDiv.appendChild(row5);
    // Row 5 Col 2
    var row5Col2 = document.createElement("div");
    row5Col2.className = "col-4 col-sm-3";
    var row5Col2Text = document.createTextNode("" + expenseNameMonth);
    row5Col2.appendChild(row5Col2Text);
    row5.appendChild(row5Col2);
    reportResumDiv.appendChild(row5);
    // Row 5 Col 3
    var row5Col3 = document.createElement("div");
    row5Col3.className = "col-3 col-sm-3 text-danger";
    var row5Col3Text = document.createTextNode("" + higherExpenseMonth);
    row5Col3.appendChild(row5Col3Text);
    row5.appendChild(row5Col3);
    reportResumDiv.appendChild(row5);
};
// **********************
// ** Others functions **
// **********************
// Check if there's operations or not
var changeReportImg = function () {
    var storage = getStorage();
    var operations = storage.operations;
    if (operations.length > 3) {
        emptyReport.classList.add("d-none");
        loadedReport.classList.remove("d-none");
    }
    else {
        emptyReport.classList.remove("d-none");
        loadedReport.classList.add("d-none");
    }
};
// Initial function of report
var initReport = function () {
    getStorage();
    changeReportImg();
    createTotalPerCategoryTable();
    createTotalPerMonthTable();
    createResumCatTable();
    createResumMonthTable();
};
initReport();
