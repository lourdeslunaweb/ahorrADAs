var newCatForm = document.getElementById("newcat-form");
var inputCat = document.getElementById("input-cat");
var categories = {
    name: '',
    slug: ''
};
// Create new category
// Ver como crear los divs de create category
var divNewCat = document.createElement("div");
locStor.categories;
newCatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    categories.name = inputCat.value;
    categories.slug = slugify(inputCat.value);
    storage.categories.push(categories);
    localStorage.setItem('to-storage', JSON.stringify(storage));
    return categories;
});
// EDIT CATEGORIES
