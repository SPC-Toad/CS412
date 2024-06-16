//function that takes in a string and another function where it will return function(string)
const decorateString = (str, decorator) => decorator(str);

// First expression
// Splits it by character 'c'
const splitOnC = str => str.split('c');
// Test case
console.log(`Split on 'c': ${decorateString('supercalifragilisticexpialidocious', splitOnC)}`);

// Second expression
const replaceA = str => {
    // Regex to replace all lower case a to A
    const modifiedString = str.replace(/a/g, 'A');
    // Returns set of key and value pair of string
    return {
        originalString: str,
        modifiedString: modifiedString,
        numberReplaced: (str.match(/a/g) || []).length,
        length: modifiedString.length
    };
};
//Test case 
console.table(decorateString('supercalifragilisticexpialidocious', replaceA));
