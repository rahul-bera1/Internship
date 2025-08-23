function Check() {
    let s=0
    let result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            result[s] = i;
            s++; 
        }
    }
    console.log(`divisible by 5 between 1 and 100 is :`);
    console.log(result.join(', '));
}
module.exports = { Check };
