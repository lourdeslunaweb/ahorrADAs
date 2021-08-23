// Set variables of report
var emptyReport = document.getElementById("empty-report-interface");
var loadedReport = document.getElementById("loaded-report-interface");
var reportResumDiv = document.getElementById("report-resume-div");
var totalPerCatDiv = document.getElementById("total-per-category");
// Search category with higher gain, higher expense and its corresponding month
var categoryGainExpenseMonth = function () {
    var storage = getStorage();
    var operations = storage.operations;
    var higherGain = 0;
    var gainCatName;
    var higherExpense = 0;
    var expenseCatName;
    var gainCatMonth;
    var expenseCatMonth;
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        if (operation.type === "Ganancia") {
            var operationAmountNumber = Number(operation.amount);
            if (operationAmountNumber > higherGain) {
                higherGain = operation.amount;
                gainCatName = operation.category;
                gainCatMonth = operation.date;
            }
        }
        else if (operation.type === "Gasto") {
            var operationAmountNumber = Number(operation.amount);
            if (operationAmountNumber > higherExpense) {
                higherExpense = operation.amount;
                expenseCatName = operation.category;
                expenseCatMonth = operation.date;
            }
        }
    }
    return [gainCatName, higherGain, expenseCatName, higherExpense, gainCatMonth, expenseCatMonth];
};
var categoryGainArray = categoryGainExpenseMonth();
var categoryGainName = categoryGainArray[0];
var categoryGainAmount = categoryGainArray[1];
var categoryExpenseName = categoryGainArray[2];
var categoryExpenseAmount = categoryGainArray[3];
var categoryGainMonth = categoryGainArray[4];
var categoryExpenseMonth = categoryGainArray[5];
var options = { month: 'long' };
var gainMonth = new Date(categoryGainMonth).toLocaleDateString("es-ES", options);
var expenseMonth = new Date(categoryExpenseMonth).toLocaleDateString("es-ES", options);
// Report Resum
var reportResum = function () {
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
    var row1Col2Text = document.createTextNode("" + categoryGainName);
    row1Col2.appendChild(row1Col2Text);
    row1.appendChild(row1Col2);
    reportResumDiv.appendChild(row1);
    // Row 1 Col 3
    var row1Col3 = document.createElement("div");
    row1Col3.className = "col-3 col-sm-3 text-success";
    var row1Col3Text = document.createTextNode("" + categoryGainAmount);
    row1Col3.appendChild(row1Col3Text);
    row1.appendChild(row1Col3);
    reportResumDiv.appendChild(row1);
    // create Row 2 "Categoría con mayor gasto" and its respective columns
    var row2 = document.createElement("div");
    row2.className = "row mt-1";
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
    var row2Col2Text = document.createTextNode("" + categoryExpenseName);
    row2Col2.appendChild(row2Col2Text);
    row2.appendChild(row2Col2);
    reportResumDiv.appendChild(row2);
    // Row 2 Col 3
    var row2Col3 = document.createElement("div");
    row2Col3.className = "col-3 col-sm-3 text-danger";
    var row2Col3Text = document.createTextNode("" + categoryExpenseAmount);
    row2Col3.appendChild(row2Col3Text);
    row2.appendChild(row2Col3);
    reportResumDiv.appendChild(row2);
    // create Row 3 "Categoría con mayor balance" and its respective columns
    var row3 = document.createElement("div");
    row3.className = "row mt-1";
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
    var row3Col2Text = document.createTextNode("row3");
    row3Col2.appendChild(row3Col2Text);
    row3.appendChild(row3Col2);
    reportResumDiv.appendChild(row3);
    // Row 3 Col 3
    var row3Col3 = document.createElement("div");
    row3Col3.className = "col-3 col-sm-3";
    var row3Col3Text = document.createTextNode("row3");
    row3Col3.appendChild(row3Col3Text);
    row3.appendChild(row3Col3);
    reportResumDiv.appendChild(row3);
    // create Row 4 "Mes con mayor ganancia" and its respective columns
    var row4 = document.createElement("div");
    row4.className = "row mt-1";
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
    var row4Col2Text = document.createTextNode("" + gainMonth);
    row4Col2.appendChild(row4Col2Text);
    row4.appendChild(row4Col2);
    reportResumDiv.appendChild(row4);
    // Row 4 Col 3
    var row4Col3 = document.createElement("div");
    row4Col3.className = "col-3 col-sm-3 text-success";
    var row4Col3Text = document.createTextNode("" + categoryGainAmount);
    row4Col3.appendChild(row4Col3Text);
    row4.appendChild(row4Col3);
    reportResumDiv.appendChild(row4);
    // create Row 5 "Mes con mayor gasto" and its respective columns
    var row5 = document.createElement("div");
    row5.className = "row mt-1";
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
    var row5Col2Text = document.createTextNode("" + expenseMonth);
    row5Col2.appendChild(row5Col2Text);
    row5.appendChild(row5Col2);
    reportResumDiv.appendChild(row5);
    // Row 5 Col 3
    var row5Col3 = document.createElement("div");
    row5Col3.className = "col-3 col-sm-3 text-danger";
    var row5Col3Text = document.createTextNode("" + categoryExpenseAmount);
    row5Col3.appendChild(row5Col3Text);
    row5.appendChild(row5Col3);
    reportResumDiv.appendChild(row5);
};
// Totals Per Category
var totalPerCategory = function () {
    var storage = getStorage();
    var categories = storage.categories;
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        // Row of each category
        var rowCat = document.createElement("div");
        rowCat.className = "row mt-1";
        // Categiry Name column
        var colName = document.createElement("div");
        colName.className = "col-3";
        var colNameText = document.createTextNode("" + category.name);
        // Category Gain column
        var colGain = document.createElement("div");
        colGain.className = "col-3 text-success";
        var colGainText = document.createTextNode("xGanx");
        // Category Expense column
        var colExpense = document.createElement("div");
        colExpense.className = "col-3 text-danger";
        var colExpenseText = document.createTextNode("xGastx");
        // Category Balance colum
        var colBalance = document.createElement("div");
        colBalance.className = "col-3";
        var colBalanceText = document.createTextNode("xBalx");
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
        // Append child into Total per Category Div
        totalPerCatDiv.appendChild(rowCat);
    }
};
// Total Date
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
    reportResum();
    totalPerCategory();
};
initReport();
