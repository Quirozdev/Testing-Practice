export function capitalize(str) {
  if (str.length === 0) return str;
  const [firstLetter, ...letters] = str;
  return firstLetter.toUpperCase() + letters.join('');
}

export function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) {
      throw new Error('You cant divide by 0');
    }
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(str, shiftFactor) {
  const charCodes = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    charCodes.push(getOffSetLetterCharCode(charCode, shiftFactor));
  }
  return String.fromCharCode(...charCodes);
}

function isLetterFromAlphabet(charCode) {
  return isLetterLowerCase(charCode) || isLetterUpperCase(charCode);
}

function isLetterLowerCase(charCode) {
  return charCode >= 97 && charCode <= 122;
}

function isLetterUpperCase(charCode) {
  return charCode >= 65 && charCode <= 90;
}

function getOffSetLetterCharCode(letterCharCode, shiftFactor) {
  if (!isLetterFromAlphabet(letterCharCode)) {
    return letterCharCode;
  }

  // this is to allo shift factors over 25
  const shiftFactorModulo = shiftFactor % 26;
  const cleanShiftFactor = shiftFactor <= 25 ? shiftFactor : shiftFactorModulo;

  if (isLetterLowerCase(letterCharCode)) {
    // 123 = 97 (character code of the first lowercase letter) + 26 (total lowercase letters)
    const result = (letterCharCode + cleanShiftFactor) % 123;
    // the previous result could be the correct one if the shift factor
    // didnt overflow the last lowercase letter char code, if thats the case
    // it is added 97
    return result < 97 ? result + 97 : result;
    // 97 + (119 + 5) % (97 + 26) = 98
    // 97 + (97 + 5) % (97 + 26) = 98
    // 97 + ((119 + 5)) % (119 - 1) = 97 + (124 % 118) = 97 + 6 = 103
  } else {
    // 91 = 65 (character code of the first uppercase letter) + 26 (total uppercase letters)
    const result = (letterCharCode + cleanShiftFactor) % 91;
    return result < 65 ? result + 65 : result;
  }
}

export function analyzeArray(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let min = Infinity;
  let max = -Infinity;
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
    total += numbers[i];
  }

  return {
    average: total / numbers.length,
    min,
    max,
    length: numbers.length,
  };
}
