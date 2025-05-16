function isPalindrome(x: number): boolean {
    const num = x.toString()
    const reversed = num.split('').reverse().join('')
    return num === reversed 
};