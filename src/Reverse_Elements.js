function Check(a) {
    console.log(`Array : ${a}`);
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b[i] = a[a.length - 1 - i];
    }
    console.log(`Reverse Array is : ${b}`);
}

module.exports = {Check};
