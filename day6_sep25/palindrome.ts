function main() {
    const testNumber = 12321; 
    if (isPalindrome(testNumber)) {
        console.log(`${testNumber} is a palindrome.`);
    } else {
        console.log(`${testNumber} is not a palindrome.`);
    }
}
function isPalindrome(num: number): boolean {
    const numStr = num.toString(); 
    const reversedStr = numStr.split('').reverse().join(''); 
    return numStr === reversedStr; 
}
main();
