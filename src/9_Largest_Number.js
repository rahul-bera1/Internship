function Check(a) {
    let max = a[0];
    for (let n of a) {
        if (n > max) {
            max = n;
        }
    }

    console.log(`Largest number = ${max}`);
}

module.exports = {Check};
