function fectorial(n) {
    if (n == 1) {
        return 1;
    }

    return n * fectorial(n - 1);
}

const myFactorial = fectorial(6);

console.log(myFactorial);