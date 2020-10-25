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
  let letters = [];

  for (let i = 0; i < expr.length / 10; i++) {
    numbers = expr.slice(i * 10, (i * 10) + 10);
    letters[i] = '';

    for (let j = 0; j < expr.length / 2; j++) {
      switch (numbers.slice(j * 2, j * 2 + 2)) {
        case '10':
          letters[i] += '.';
          break;

        case '11':
          letters[i] += '-';
          break;

        case '**':
          letters[i] = ' ';
          break;

        default:
          break;
      }
    }
    
    letters[i] = MORSE_TABLE[letters[i]] || ' ';
  }

  return letters.join('');
}

module.exports = {
  decode,
};
