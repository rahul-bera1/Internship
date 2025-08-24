function Check(a) {
  
    let s = 0;
    for (let n of a) {
        if (n <= 1) continue;
        let isPrime = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            s += n;
        }
    }
    console.log(`Sum of prime numbers in array = ${s}`);
}
module.exports = { Check };
