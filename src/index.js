const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprArr = [];
    let counter = 0;
    let subExpr;
    let encodedLetters = [];

    for (let i = 0; i < expr.length / 10; i++) {
        subExpr = expr.slice(counter, counter + 10);
        exprArr.push(subExpr);
        counter += 10;
    }

    for (let i = 0; i < exprArr.length; i++) {
        let letter = exprArr[i];
        for (let j = 0; j < exprArr[i].length; j++) {
            if (exprArr[i][j] === '0') {
                letter = letter.slice(1);
            } else if (exprArr[i][j] === '*') {
                letter = ' ';
            } else break;
        }
        encodedLetters.push(letter);
    }
    
    for (let i = 0; i < encodedLetters.length; i++) {
        encodedLetters[i] = encodedLetters[i].replaceAll('10', '.').replaceAll('11', '-');
    }
    return encodedLetters.map(l => l === ' ' ? ' ' : MORSE_TABLE[l]).join('');
}

module.exports = {
    decode
}