function Check() {
    let count = 0;
    let num = 2;
    let result = [];
    while (count < 20) {
        result[count] = num;
        num += 2;
        count++;
    }
    console.log(`First 20 even numbers: ${result}`);
}
module.exports = { Check };
