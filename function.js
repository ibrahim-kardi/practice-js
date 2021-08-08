function sumNumber(num1, num2, num3) {
    var total = num1 + num2 + num3;

    return total;
}
sumNumber(41, 54, 25);

function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(45);

console.log('Marathon in Km:', marathon);