function Check(a) {
    let countE = 0;
    for (let n of a) {
        let p = 0;

        if (n <= 1) {
            continue;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                p = 1;
                break;
            }
        }
        if (p === 0) {
            countE++;
        }
    }
    console.log(`Total prime numbers in the array: ${countE}`);
}
module.exports = { Check };
