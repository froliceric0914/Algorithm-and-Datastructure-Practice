// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunkArray = [];
    for (let e of array) {
        const last = chunkArray[chunkArray.length - 1];
        console.log('last', last);
        if (!last || last.length === size) {
            chunkArray.push([e]);
        } else {
            last.push(e);
        }
    }
    return chunkArray;
}

console.log(chunk([1, 2, 3, 4, 5], 2));

module.exports = chunk;
