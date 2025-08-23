function Check(a) {
    let min = a[0];
    for (let n of a) {
        if (n < min) {
            min = n;
        }
    }

    console.log(`Smallest number = ${min}`);
}

module.exports = {Check};
