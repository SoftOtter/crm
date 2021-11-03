let source = [1, 2, 7, 5, 6, 8, 4, 13, 15, 12, 17, 18]; // 7 2 5 1 4 6 8

function oddEvenSort (startArray) {
    let odd = [];
    let even = [];
    let result = [];
    for (let i = 0; i < startArray.length; i++) {
        if (startArray[i] % 2 === 0) {
            even.push(startArray[i]);
        } else {
            odd.push(startArray[i]);
        }
    }

    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);

    for (let i = 0; i < startArray.length; i++) {
        if (startArray[i] % 2 === 0) {
            result.push(even[0]);
            even.shift();
        } else {
            result.push(odd[0]);
            odd.shift();
        }
    }

    return result;
}

console.log(oddEvenSort(source));