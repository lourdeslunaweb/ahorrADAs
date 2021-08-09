// const categories : Category = {
//     name:'',
//     slug:'',
// }
let storage = getStorage()

const newCategory = (e) => {
    e.preventDefault();

    const form = e.target;

    const newCategoryName: string = form.name.value;

    const newCategory: Category = {
        name: newCategoryName,
        slug: slugify(newCategoryName)
    }

    storage.categories.push(newCategory);

    localStorage.setItem('todo-storage', JSON.stringify(storage));

}