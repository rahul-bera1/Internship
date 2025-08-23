function Check(a) {
    console.log(`Table of ${a}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} x ${i} = ${a * i}`);
    }
}
module.exports = { Check };
