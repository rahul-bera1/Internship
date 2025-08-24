function Check(num) {
    let a = 0, b = 1, s;
    while (b < num) {
        s = a + b;
        a = b;
        b = s;
    }
    if (b === num) {
        console.log(`${num} is a Fibonacci number.`);
    } else {
        console.log(`${num} is NOT a Fibonacci number.`);
    }
}

module.exports = {Check};
