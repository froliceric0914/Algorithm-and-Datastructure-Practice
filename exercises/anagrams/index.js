// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // let charA = createCharMap(stringA);
    // let charB = createCharMap(stringB);
    // if (Object.keys(charA).length !== Object.keys(charB).length) {
    //     return false;
    // }

    // for (let char in charA) {
    //     if (charA[char] === charB[char]) {
    //         return true;
    //     }
    // }

    let charA = sortString(stringA);
    let charB = sortString(stringB);

    return charA === charB;
}
//replace(/[^\w]/g, "")

const sortString = (str) =>
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

function createCharMap(string) {
    let charMap = {};
    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

//method two
// use the sort function to compare string

anagrams('hello', 'hello');

module.exports = anagrams;
