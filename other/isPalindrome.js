// ---------------------- STRING -----------------------
const isPalindrome = (str) => {
    let start = 0
    let end = str.length - 1

    while (start <= end) {
        if (str[start] === str[end]) {
            start++
            end--
        } else {
            return false
        }
    }

    return true
}

console.log(isPalindrome('ajrarja'));

// #2

const isPalindromeV2 = (str) => {
    // 1. Удаляем все не-буквы и не-цифры, приводим к нижнему регистру
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-zа-яё0-9]/g, ''); // Удаляет пробелы и спецсимволы

    // 2. Сравниваем с перевернутой строкой
    return cleaned === cleaned.split('').reverse().join('');
};

// Примеры
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false




// ------------------- NUMBER ---------------------

const isPalindromeNumber = (x) => {
    let rev = 0;
    let lastDigit;
    let num = x;

    if (num === 0) return true;
    if ( num < 0 ) return false;

    while (num !== 0) {
        lastDigit = num % 10;
        num = Math.floor(num / 10);
        rev = rev * 10 + lastDigit;

        console.log('test', {
            lastDigit,
            num,
            rev
        })
    }

    return rev === x;
}

console.log(isPalindromeNumber(121));
