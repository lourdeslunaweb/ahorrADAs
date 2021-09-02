// Set variables of report
const emptyReport = document.getElementById("empty-report-interface");
const loadedReport = document.getElementById("loaded-report-interface");
const reportResumDiv = document.getElementById("report-resume-div");
const totalPerCatDiv = document.getElementById("total-per-category");
const totalPerMonthDiv = document.getElementById("total-per-month");

// *******************
// ** REPORT SUMMARY**
// *******************

// Create Resum Table
const createResumTable = () => {
    // create Row 1 "Categoría con mayor ganancia" and its respective columns
    const row1 = document.createElement("div");
    row1.className = "row mt-3";
    // Row 1 Col 1
    const row1Col1 = document.createElement("div");
    row1Col1.className = "col-5 col-sm-6";
    const row1Col1Text = document.createTextNode("Categoría con mayor ganancia");
    row1Col1.appendChild(row1Col1Text);
    row1.appendChild(row1Col1);
    reportResumDiv.appendChild(row1);
    // Row 1 Col 2
    const row1Col2 = document.createElement("div");
    row1Col2.className = "col-4 col-sm-3 text-success";
    const row1Col2Text = document.createTextNode("xCatMayGanx");
    row1Col2.appendChild(row1Col2Text);
    row1.appendChild(row1Col2);
    reportResumDiv.appendChild(row1);
    // Row 1 Col 3
    const row1Col3 = document.createElement("div");
    row1Col3.className = "col-3 col-sm-3 text-success";
    const row1Col3Text = document.createTextNode("x$$$CatMayGanx");
    row1Col3.appendChild(row1Col3Text);
    row1.appendChild(row1Col3);
    reportResumDiv.appendChild(row1);
    // create Row 2 "Categoría con mayor gasto" and its respective columns
    const row2 = document.createElement("div");
    row2.className = "row mt-3 mt-sm-1";
    // Row 2 Col 1
    const row2Col1 = document.createElement("div");
    row2Col1.className = "col-5 col-sm-6";
    const row2Col1Text = document.createTextNode("Categoría con mayor gasto");
    row2Col1.appendChild(row2Col1Text);
    row2.appendChild(row2Col1);
    reportResumDiv.appendChild(row2);
    // Row 2 Col 2
    const row2Col2 = document.createElement("div");
    row2Col2.className = "col-4 col-sm-3 text-danger";
    const row2Col2Text = document.createTextNode("xCatMayGaSTox");
    row2Col2.appendChild(row2Col2Text);
    row2.appendChild(row2Col2);
    reportResumDiv.appendChild(row2);
    // Row 2 Col 3
    const row2Col3 = document.createElement("div");
    row2Col3.className = "col-3 col-sm-3 text-danger";
    const row2Col3Text = document.createTextNode("xCatMayGaSTox");
    row2Col3.appendChild(row2Col3Text);
    row2.appendChild(row2Col3);
    reportResumDiv.appendChild(row2);
    // create Row 3 "Categoría con mayor balance" and its respective columns
    const row3 = document.createElement("div");
    row3.className = "row mt-3 mt-sm-1";
    // Row 3 Col 1
    const row3Col1 = document.createElement("div");
    row3Col1.className = "col-5 col-sm-6";
    const row3Col1Text = document.createTextNode("Categoría con mayor balance");
    row3Col1.appendChild(row3Col1Text);
    row3.appendChild(row3Col1);
    reportResumDiv.appendChild(row3);
    // Row 3 Col 2
    const row3Col2 = document.createElement("div");
    row3Col2.className = "col-4 col-sm-3";
    const row3Col2Text = document.createTextNode("xMayBalancex");
    row3Col2.appendChild(row3Col2Text);
    row3.appendChild(row3Col2);
    reportResumDiv.appendChild(row3);
    // Row 3 Col 3
    const row3Col3 = document.createElement("div");
    row3Col3.className = "col-3 col-sm-3";
    const row3Col3Text = document.createTextNode("x$$MayBalancx");
    row3Col3.appendChild(row3Col3Text);
    row3.appendChild(row3Col3);
    reportResumDiv.appendChild(row3);
    // create Row 4 "Mes con mayor ganancia" and its respective columns
    const row4 = document.createElement("div");
    row4.className = "row mt-3 mt-sm-1";
    // Row 4 Col 1
    const row4Col1 = document.createElement("div");
    row4Col1.className = "col-5 col-sm-6";
    const row4Col1Text = document.createTextNode("Mes con mayor ganancia");
    row4Col1.appendChild(row4Col1Text);
    row4.appendChild(row4Col1);
    reportResumDiv.appendChild(row4);
    // Row 4 Col 2
    const row4Col2 = document.createElement("div");
    row4Col2.className = "col-4 col-sm-3";
    const row4Col2Text = document.createTextNode("xMesMayGanx");
    row4Col2.appendChild(row4Col2Text);
    row4.appendChild(row4Col2);
    reportResumDiv.appendChild(row4);
    // Row 4 Col 3
    const row4Col3 = document.createElement("div");
    row4Col3.className = "col-3 col-sm-3 text-success";
    const row4Col3Text = document.createTextNode("x$$MesMayGanx");
    row4Col3.appendChild(row4Col3Text);
    row4.appendChild(row4Col3);
    reportResumDiv.appendChild(row4);
    // create Row 5 "Mes con mayor gasto" and its respective columns
    const row5 = document.createElement("div");
    row5.className = "row mt-3 mt-sm-1";
    // Row 5 Col 1
    const row5Col1 = document.createElement("div");
    row5Col1.className = "col-5 col-sm-6";
    const row5Col1Text = document.createTextNode("Mes con mayor gasto");
    row5Col1.appendChild(row5Col1Text);
    row5.appendChild(row5Col1);
    reportResumDiv.appendChild(row5);
    // Row 5 Col 2
    const row5Col2 = document.createElement("div");
    row5Col2.className = "col-4 col-sm-3";
    const row5Col2Text = document.createTextNode("xMesMayGanSTx");
    row5Col2.appendChild(row5Col2Text);
    row5.appendChild(row5Col2);
    reportResumDiv.appendChild(row5);
    // Row 5 Col 3
    const row5Col3 = document.createElement("div");
    row5Col3.className = "col-3 col-sm-3 text-danger";
    const row5Col3Text = document.createTextNode("x$$MesMayGanSTx");
    row5Col3.appendChild(row5Col3Text);
    row5.appendChild(row5Col3);
    reportResumDiv.appendChild(row5);
}

// *************************
// ** TOTALS PER CATEGORY**
// *************************

const totalPerCategory = (name: string) => {
    const storage = getStorage();
    const { operations } = storage;
    // arrCatGroup is an array of objets grouped per categories
    const arrCatGroup: Operation[] = operations.filter(operation => {
        return (operation.category === name)
    })
    let totalExpByCat = 0;
    let totalGainByCat = 0;
    let totalBalanceByCat = 0;
    for (const item of arrCatGroup) {
        if (item.type === "Gasto") {
            totalExpByCat += Number(item.amount)
        } else if (item.type === "Ganancia") {
            totalGainByCat += Number(item.amount)
        }
    }
    totalBalanceByCat = totalGainByCat - totalExpByCat
    return [totalGainByCat, totalExpByCat, totalBalanceByCat]
}

// Create Totals Per Category Table
const createTotalPerCategoryTable = () => {
    const storage = getStorage();
    const { categories } = storage;
    for (let category of categories) {
        // Row for each category
        const rowCat = document.createElement("div");
        rowCat.className = "row mt-3 mt-sm-1";
        // Categiry Name column
        const colName = document.createElement("div");
        colName.className = "col-12 col-sm-3 fw-bold"
        const colNameText = document.createTextNode(`${category.name}`);
        // Category Gain column
        const colGain = document.createElement("div");
        colGain.className = "col-4 col-sm-3";
        // Call the function totalPerCategory()
        const arrReportResults = totalPerCategory(category.name)
        let totalGainByCat = arrReportResults[0];
        const totalExpByCat = arrReportResults[1];
        const totalBalanceByCat = arrReportResults[2];
        const colGainText = document.createTextNode(`$+${totalGainByCat}`);
        // Category Expense column
        const colExpense = document.createElement("div");
        colExpense.className = "col-4 col-sm-3";
        const colExpenseText = document.createTextNode(`$-${totalExpByCat}`);
        // Category Balance colum
        const colBalance = document.createElement("div");
        let colBalanceText;
        if (totalBalanceByCat >= 0) {
            colBalance.className = "col-4 col-sm-3 text-success";
            colBalanceText = document.createTextNode(`$${totalBalanceByCat}`);
        } else if (totalBalanceByCat < 0) {
            colBalance.className = "col-4 col-sm-3 text-danger";
            colBalanceText = document.createTextNode(`$${totalBalanceByCat}`);
        }
        //Append child text into div
        colName.appendChild(colNameText);
        colGain.appendChild(colGainText);
        colExpense.appendChild(colExpenseText);
        colBalance.appendChild(colBalanceText);
        //Append child columns into row
        rowCat.appendChild(colName)
        rowCat.appendChild(colGain)
        rowCat.appendChild(colExpense)
        rowCat.appendChild(colBalance)
        // Append child row into Total per Category Div
        totalPerCatDiv.appendChild(rowCat)
    }
}

// ***********************
// ** TOTALS PER MONTH  **
// ***********************

// Create Totals Per Month Table
const createTotalPerMonthTable = () => {
    const storage = getStorage();
    const { operations } = storage;
    let totalsPerMonth = {};
    operations.forEach((operation) => {
        const date = new Date(operation.date);
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
    for (const year in totalsPerMonth) {
        for (const month in totalsPerMonth[year]) {
            // Row for each year/ month
            const yearRow = document.createElement("div");
            yearRow.className = "row mt-1";
            // First column year and month name
            const firstColDiv = document.createElement("div");
            firstColDiv.className = "col-12 col-sm-3 fw-bold";
            const firstColText = document.createTextNode(`${year}/ ${Number(month) + 1}`);
            firstColDiv.appendChild(firstColText);
            yearRow.appendChild(firstColDiv);
            totalPerMonthDiv.appendChild(yearRow)
            // // Second column total Gain
            const secondColDiv = document.createElement("div");
            secondColDiv.className = "col-4 col-sm-3";
            let showGain;
            if (totalsPerMonth[year][month].Ganancia) {
                showGain = totalsPerMonth[year][month].Ganancia
            } else {
                showGain = 0
            }
            const secondColText = document.createTextNode(`$+${showGain}`);
            secondColDiv.appendChild(secondColText);
            yearRow.appendChild(secondColDiv);
            totalPerMonthDiv.appendChild(yearRow)
            // Third column total Expense
            const thirdColDiv = document.createElement("div");
            thirdColDiv.className = "col-4 col-sm-3";
            let showExpense;
            if (totalsPerMonth[year][month].Gasto) {
                showExpense = totalsPerMonth[year][month].Gasto
            } else {
                showExpense = 0
            }
            const thirdColText = document.createTextNode(`$-${showExpense}`);
            thirdColDiv.appendChild(thirdColText);
            yearRow.appendChild(thirdColDiv);
            totalPerMonthDiv.appendChild(yearRow)
            // Fourth column Balance
            const fourthColDiv = document.createElement("div");
            let showBalance = showGain - showExpense;
            let fourthColText;
            if (showBalance >= 0) {
                fourthColDiv.className = "col-4 col-sm-3 text-success";
                fourthColText = document.createTextNode(`$${showBalance}`);
            } else if (showBalance < 0) {
                fourthColDiv.className = "col-4 col-sm-3 text-danger";
                fourthColText = document.createTextNode(`$${showBalance}`);
            }
            fourthColDiv.appendChild(fourthColText);
            yearRow.appendChild(fourthColDiv);
            totalPerMonthDiv.appendChild(yearRow)
        }
    }
}


// **********************
// ** Others functions **
// **********************


// Check if there's operations or not
const changeReportImg = () => {
    const storage = getStorage();
    const { operations } = storage;
    if (operations.length > 0) {
        emptyReport.classList.add("d-none");
        loadedReport.classList.remove("d-none");
    } else {
        emptyReport.classList.remove("d-none");
        loadedReport.classList.add("d-none");
    }
}

// Initial function of report
const initReport = () => {
    getStorage();
    changeReportImg();
    createTotalPerCategoryTable();
    createTotalPerMonthTable();
    createResumTable();
}
initReport()