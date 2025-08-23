function Check(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let n of arr) {
        if (n % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(`Array: ${arr}`);
    console.log(`Total Even Numbers: ${evenCount}`);
    console.log(`Total Odd Numbers: ${oddCount}`);
    
    return { evenCount, oddCount };
}

module.exports = {Check};
