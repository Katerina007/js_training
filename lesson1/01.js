function isPalindrome(str) {
    str = str.toLowerCase().split(" ").join("");
    const len = str.length/2;
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) 
            return "string is not palindrome";
    }
    return "string is palindrome";
}

console.log(isPalindrome("А роза упала на лапу Азора"));