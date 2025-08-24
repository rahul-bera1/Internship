function Check() {
    let n1 = 0, n2 = 1, next;
    let result = [n1, n2];

    for (let i = 2; i < 10; i++) {
        next = n1 + n2;
        result.push(next);
        n1 = n2;
        n2 = next;
    }

    console.log(`First 10 Fibonacci numbers is : ${result}`);
}

module.exports = {Check};
