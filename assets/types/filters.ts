/***********
 *
 * FILTERS
 *
 **********/


const selectType = document.getElementById("type-filter");
const selectCategory = document.getElementById("select-category");
const selectDate = document.getElementById("filter-date");
const selectSort = document.getElementById("select-sort");

// FILTER BY TYPE:

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

// FILTER BY CATEGORY:

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

// FILTER BY DATE:

const dateFilter = (e) => {
  const storage = getStorage();
  let { operations } = storage;
  const date = new Date(`${selectDate.value}T00:00:00`).getTime();
  const opFilteredByDate = operations.filter(operation => {
    return (new Date(`${operation.date}T00:00:00`).getTime() >= date)
  })
  refreshOperationTable(opFilteredByDate)
}

// SORT BY :

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
      operations.sort((a, b) => {
        if (a.description > b.description) { return 1 }
        if (a.description < b.description) { return -1 }
        // a must be equal to b
        return 0;
      });
      refreshOperationTable(operations)
      break
    case "z-a":
      operations.sort((b, a) => {
        if (a.description > b.description) { return 1 }
        if (a.description < b.description) { return -1 }
        return 0;
      });
      refreshOperationTable(operations)
      break
    default:
      refreshOperationTable(operations)
  }
}

// FILTER EVENTS

selectType.addEventListener("change", typeFilter)
selectCategory.addEventListener("change", categoryFilter)
selectDate.addEventListener("change", dateFilter)
selectSort.addEventListener("change", sortBy)

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


// HIDE FILTERS

const hideFilter = document.getElementById("hide-filter");
const filterSelects = document.getElementsByClassName("filter");
hideFilter.innerText =  "Ocultar filtros"

hideFilter.addEventListener("click", () => {
  for(let select of filterSelects) {
    select.classList.toggle("d-none");
    select.className === "d-none" ? hideFilter.innerText =  "Ocultar filtros" : hideFilter.innerText = "Mostrar filtros";
  }
})