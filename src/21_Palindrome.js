function Check(a) {
 
    let s = true;
    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            s = false;
            break;
        }
    }
    if (s) {
        console.log(`"${a}" is a palindrome.`);
    } else {
        console.log(`"${a}" is NOT a palindrome.`);
    }
}
module.exports = { Check };
