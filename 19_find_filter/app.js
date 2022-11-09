// filter

const products = [
    { name: 'apple', category: 'mobile' },
    { name: 'lenovo', category: 'laptop' },
    { name: 'asus', category: 'laptop' },
    { name: 'samsung', category: 'mobile' },
];


const results = products.filter(function(product) {
    return product.category == "laptop";
});


console.log(results);


// find return just one

const result = products.find(function(product) {
    return product.category == "laptop";
});


console.log(result);