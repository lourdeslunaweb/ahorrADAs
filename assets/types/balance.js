var emptyOps = document.getElementById("empty-ops");
var loadedOps = document.getElementById("loaded-ops");
var initBalance = function () {
    var storage = getStorage();
    var operations = storage.operations;
    if (operations.length > 0) {
        emptyOps.classList.add("d-none");
        loadedOps.classList.remove("d-none");
    }
    else {
        emptyOps.classList.remove("d-none");
        loadedOps.classList.add("d-none");
    }
};
initBalance();
