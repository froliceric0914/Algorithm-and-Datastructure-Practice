// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunkArray = [];
//     for (let e of array) {
//         console.log('e', e);
//         const last = chunkArray[chunkArray.length - 1];
//         console.log('last', last);
//         if (!last || last.length === size) {
//             chunkArray.push([e]);
//             console.log('chunkArray1', chunkArray);
//         } else {
//             last.push(e);
//             console.log('chunkArray2', chunkArray);
//         }
//     }
//     return chunkArray;
// }

//Array.slice(n,m) return to an array, starting from index n to the element< m
//e.g. array.slice(0,2), return to array[0,1]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));

module.exports = chunk;
