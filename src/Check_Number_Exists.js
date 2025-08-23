function Check(a) {
    console.log(`Array : ${a}`);
    let num = 15; 
    let found = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === num) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log(`${num} exists`);
    } else {
        console.log(`${num} does NOT exist`);
    }
}
module.exports = { Check };
