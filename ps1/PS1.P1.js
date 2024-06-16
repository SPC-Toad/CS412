const reverseAlphabetical = str => {
    const letters = str.replace(/[^a-zA-Z]/g, ''); // Remove non-letters
    const sortedLetters = letters.split('').sort().reverse().join('');
    return sortedLetters;
};

// Output: Reversed alphabetical: xuutsssrrppoollliiiiiiigfeedcccaaa
console.log(`Reversed alphabetical: ${reverseAlphabetical('supercalifragilisticexpialidocious')}`);
