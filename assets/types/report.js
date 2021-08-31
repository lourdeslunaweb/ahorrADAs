// Set variables of report
var emptyReport = document.getElementById("empty-report-interface");
var loadedReport = document.getElementById("loaded-report-interface");
var reportResumDiv = document.getElementById("report-resume-div");
var totalPerCatDiv = document.getElementById("total-per-category");
var totalPerMonthDiv = document.getElementById("total-per-month");
// *********************************
// ** Set functions to obtain data**
// *********************************
//Totals per category funtcion
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
// Totals per Month function
var totalPerMonth = function (name) {
    var storage = getStorage();
    var operations = storage.operations;
    // arrCatGroup is an array of objets grouped per categories
    var arrCatGroup = operations.filter(function (operation) {
        return (operation.category === name);
    });
    var totalExpByCat = 0;
    var totalGainByCat = 0;
    var totalBalanceByCat = 0;
    for (var _i = 0, arrCatGroup_2 = arrCatGroup; _i < arrCatGroup_2.length; _i++) {
        var item = arrCatGroup_2[_i];
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
// ***********************************
// ** Set functions to create tables**
// ***********************************
// Create Resum Table
var createResumTable = function () {
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
    var row1Col2Text = document.createTextNode("xCatMayGanx");
    row1Col2.appendChild(row1Col2Text);
    row1.appendChild(row1Col2);
    reportResumDiv.appendChild(row1);
    // Row 1 Col 3
    var row1Col3 = document.createElement("div");
    row1Col3.className = "col-3 col-sm-3 text-success";
    var row1Col3Text = document.createTextNode("x$$$CatMayGanx");
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
    var row2Col2Text = document.createTextNode("xCatMayGaSTox");
    row2Col2.appendChild(row2Col2Text);
    row2.appendChild(row2Col2);
    reportResumDiv.appendChild(row2);
    // Row 2 Col 3
    var row2Col3 = document.createElement("div");
    row2Col3.className = "col-3 col-sm-3 text-danger";
    var row2Col3Text = document.createTextNode("xCatMayGaSTox");
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
    var row3Col2Text = document.createTextNode("xMayBalancex");
    row3Col2.appendChild(row3Col2Text);
    row3.appendChild(row3Col2);
    reportResumDiv.appendChild(row3);
    // Row 3 Col 3
    var row3Col3 = document.createElement("div");
    row3Col3.className = "col-3 col-sm-3";
    var row3Col3Text = document.createTextNode("x$$MayBalancx");
    row3Col3.appendChild(row3Col3Text);
    row3.appendChild(row3Col3);
    reportResumDiv.appendChild(row3);
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
    var row4Col2Text = document.createTextNode("xMesMayGanx");
    row4Col2.appendChild(row4Col2Text);
    row4.appendChild(row4Col2);
    reportResumDiv.appendChild(row4);
    // Row 4 Col 3
    var row4Col3 = document.createElement("div");
    row4Col3.className = "col-3 col-sm-3 text-success";
    var row4Col3Text = document.createTextNode("x$$MesMayGanx");
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
    var row5Col2Text = document.createTextNode("xMesMayGanSTx");
    row5Col2.appendChild(row5Col2Text);
    row5.appendChild(row5Col2);
    reportResumDiv.appendChild(row5);
    // Row 5 Col 3
    var row5Col3 = document.createElement("div");
    row5Col3.className = "col-3 col-sm-3 text-danger";
    var row5Col3Text = document.createTextNode("x$$MesMayGanSTx");
    row5Col3.appendChild(row5Col3Text);
    row5.appendChild(row5Col3);
    reportResumDiv.appendChild(row5);
};
// Create Totals Per Category Table
var createTotalPerCategoryTable = function () {
    var storage = getStorage();
    var categories = storage.categories;
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        // Row of each category
        var rowCat = document.createElement("div");
        rowCat.className = "row mt-3 mt-sm-1";
        // Categiry Name column
        var colName = document.createElement("div");
        colName.className = "col-6 col-sm-3 fw-bold";
        var colNameText = document.createTextNode("" + category.name);
        // Category Gain column
        var colGain = document.createElement("div");
        colGain.className = "col-6 col-sm-3";
        // Call the function reportByCategory()
        var arrReportResults = totalPerCategory(category.name);
        var totalGainByCat = arrReportResults[0];
        var totalExpByCat = arrReportResults[1];
        var totalBalanceByCat = arrReportResults[2];
        var colGainText = document.createTextNode("$+" + totalGainByCat);
        // Category Expense column
        var colExpense = document.createElement("div");
        colExpense.className = "col-6 col-sm-3";
        var colExpenseText = document.createTextNode("$-" + totalExpByCat);
        // Category Balance colum
        var colBalance = document.createElement("div");
        if (totalBalanceByCat >= 0) {
            colBalance.className = "col-6 col-sm-3 text-success";
            var colBalanceText = document.createTextNode("$" + totalBalanceByCat);
        }
        else if (totalBalanceByCat < 0) {
            colBalance.className = "col-6 col-sm-3 text-danger";
            var colBalanceText = document.createTextNode("$" + totalBalanceByCat);
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
// Create Totals Per Month Table
var createTotalPerMonthTable = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var monthsList = [];
    // for (const operation of operations) {
    //     const options = { month: 'long' };
    //     const datePerMonth = new Date(`${operation.date}T00:00:00`).toLocaleDateString("es-ES", options)
    //     monthsList.push(datePerMonth)
    // }
    // const months = monthsList.reduce((acc, item) => {
    //     if (!acc.includes(item)) {
    //         acc.push(item);
    //     }
    //     return acc;
    // }, [])
    // for (const month of months) {
    // }
};
// **********************
// ** Others functions **
// **********************
// Check if there's operations or not
var changeReportImg = function () {
    var storage = getStorage();
    var operations = storage.operations;
    if (operations.length > 0) {
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
    createResumTable();
};
initReport();
