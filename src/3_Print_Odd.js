function Check() {
    console.log("Odd Numbers are : ");
     for (let i = 1; i <= 50; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
}
module.exports = {Check};