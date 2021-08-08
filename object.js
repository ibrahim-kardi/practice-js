var computer = {
    price: 20000,
    storage: '512M',
    color: 'Black',
    processor: 'intel corei5'
}

// console.log(computer);
// console.log(computer.price);

computer['storage'] = '5tb';
computer.color = 'silver';
var pricenew = 'price';
computer[pricenew] = 220000;
console.log(computer);