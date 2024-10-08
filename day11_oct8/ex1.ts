// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.


//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}

function groupByFirstLetter(strings: string[]): { [key: string]: string[] } {
    const grouped: { [key: string]: string[] } = {};

    for (const str of strings) {
        const firstLetter = str.charAt(0).toLowerCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(str);
    }

    return grouped;
}

const result = groupByFirstLetter(['nithya','nithu','pandi']);
console.log(result); // Output: { a: ['Alf', 'Alice'], b: ['Ben'] }
