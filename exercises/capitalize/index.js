// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let splitStr = str
        .split(' ')
        .map((e) => {
            let capE = e.split('');
            capE[0] = capE[0].toUpperCase();
            capE = capE.join('');
            console.log('capE', capE);
            return capE;
        })
        .join(' ');
    return splitStr;
}

capitalize('a short sentence');

module.exports = capitalize;
