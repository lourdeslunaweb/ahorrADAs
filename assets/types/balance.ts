// Set Variables of balance
const emptyOps = document.getElementById("empty-ops");
const loadedOps = document.getElementById("loaded-ops");



// Initial function of balance
const initBalance = () =>{
    const storage = getStorage();
    const {operations} = storage;

    if (operations.length > 0){
        emptyOps.classList.add("d-none");
        loadedOps.classList.remove("d-none");
    } else {
        emptyOps.classList.remove("d-none");
        loadedOps.classList.add("d-none");
    }

    
}
initBalance()