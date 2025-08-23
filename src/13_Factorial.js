function Check(n) {
    console.log(`Number : ${n}`);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    console.log(`Factorial of ${n} = ${fact}`);
}

module.exports = {Check};
