function Check(a) {
    let sum = 0;
    for (let i = 0; i <a.length; i++) {
        sum += a[i];
    }
    console.log(`Sum of all numbers = ${sum}`);
}
module.exports = {Check};
