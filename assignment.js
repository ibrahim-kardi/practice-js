
// 01. Seer to Mon conversion
function seerToMon(seers) {

    if (typeof (seers) == 'number') {
        var mon = seers * 0.025;
        return mon;
    }
    else {
        console.log('please! input a number');
    }
}

var seerToMonResult = seerToMon(80);

console.log(seerToMonResult);

//02. Total sale calculation

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const cart = [
        { name: 'shirt', price: 100, quantity: shirtQuantity },
        { name: 'pant', price: 200, quantity: pantQuantity },
        { name: 'shoe', price: 500, quantity: shoeQuantity }
    ];
    let cartTotal = 0;
    for (const product of cart) {
        const productTotal = product.price * product.quantity;
        cartTotal = cartTotal + productTotal;
    }
    return cartTotal;
}
let totalPrice = totalSales(2, 2, 1);

console.log(totalPrice);

// 03. Calculate delivary cost

function deliveryCost(numberPices) {
    const forFIrst100Pice = 100;
    const forSecond100pice = 80;
    const forRestpice = 50;
    if (numberPices <= 100) {
        const count = numberPices * forFIrst100Pice;
        return count;
    }
    else if (numberPices > 100 && numberPices <= 200) {
        const firstDelivary = 100 * forFIrst100Pice;
        const restPices = numberPices - 100;
        const secondDelivary = restPices * forSecond100pice;
        const totalDelivaryCost = firstDelivary + secondDelivary;
        return totalDelivaryCost;
    }
    else {
        const firstDelivary = 100 * forFIrst100Pice;
        const secondDelivary = 100 * forSecond100pice;
        const restPices = numberPices - 200;
        const RestDelivary = restPices * forRestpice;
        const totalDelivaryCost = firstDelivary + secondDelivary + RestDelivary;
        return totalDelivaryCost;
    }
}

const cost = deliveryCost(500);
console.log(cost);


// find perfect frient friend 

const names = ['jodu', 'modumia', 'koduh', 'modus', 'jodu'];

function perfectFriend(names) {
    let frindName = "";

    for (let element of names) {
        // console.log(element.length);
        if (element.length == 5) {

            frindName = element;

            return frindName;
        }

    }

}

let frindName = perfectFriend(names);

console.log(frindName);