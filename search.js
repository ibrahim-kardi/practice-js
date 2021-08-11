const products = [
    { name: 'samsung s12', price: 12000 },
    { name: 'Xawmi J phone', price: 15000 },
    { name: 'Asus laptop', price: 40000 },
    { name: 'HP laptop', price: 51000 },

]

function productSearch(products, searchText) {
    const matched = [];
    for (const product of products) {
        const namme = product.name;
        if (namme.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }

    return matched;
}

const findMatch = productSearch(products, 'laptop');

console.log(findMatch);