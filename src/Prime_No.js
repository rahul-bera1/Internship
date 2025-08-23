function Check(number) {
   if (number < 2) {
        console.log("Number must be < 1.");
        return;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(number + " is NOT a Prime Number.");
            return;
        }
    }
    console.log(number + " is a Prime Number.");
}
module.exports = {Check};