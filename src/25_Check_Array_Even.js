function Check(a) {
    console.log(`Array : ${a}`);
    
    let allEven = true;

    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            allEven = false;
            break;
        }
    }
    if (allEven) {
        console.log("All elements are even numbers.");
    } else {
        console.log("Not all elements are even numbers.");
    }
}
module.exports = { Check };
