// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.
//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}
function groupByFirstLetter(strings) {
    var grouped = {};
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        var firstLetter = str.charAt(0).toLowerCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(str);
    }
    return grouped;
}
var result = groupByFirstLetter(['nithya', 'nithu', 'pandi']);
console.log(result); // Output: { a: ['Alf', 'Alice'], b: ['Ben'] }
