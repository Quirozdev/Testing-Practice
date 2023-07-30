import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './functions';

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world hello')).toBe('World hello');
  expect(capitalize('')).toBe('');
  expect(capitalize('a')).toBe('A');
});

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('hello world')).toBe('dlrow olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('b')).toBe('b');
});

test('calculator', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-5, 3)).toBe(-2);
  expect(calculator.add(-10, -3)).toBe(-13);

  expect(calculator.substract(12, 4)).toBe(8);
  expect(calculator.substract(-12, 4)).toBe(-16);
  expect(calculator.substract(-40, -4)).toBe(-36);

  expect(calculator.divide(8, 2)).toBe(4);
  expect(calculator.divide(-18, 3)).toBe(-6);
  expect(calculator.divide(-18, -3)).toBe(6);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
  expect(() => calculator.divide(20, 0)).toThrow();

  expect(calculator.multiply(3, 2)).toBe(6);
  expect(calculator.multiply(-10, 2)).toBe(-20);
  expect(calculator.multiply(-20, -3)).toBe(60);
  expect(calculator.multiply(5, 0)).toBe(0);
});

test('caesarCipher', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  expect(caesarCipher('ATTACK AT DAWN', 5)).toBe('FYYFHP FY IFBS');

  expect(caesarCipher('miX oF lOwer AnD Upper', 1)).toBe(
    'njY pG mPxfs BoE Vqqfs'
  );

  expect(caesarCipher('wow hello. , YeS', 28)).toBe('yqy jgnnq. , AgU');

  expect(caesarCipher('same thiNg', 0)).toBe('same thiNg');
});

test('analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([3])).toEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });

  expect(analyzeArray([6, 3])).toEqual({
    average: 4.5,
    min: 3,
    max: 6,
    length: 2,
  });

  expect(analyzeArray([3, 3, 3])).toEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 3,
  });

  expect(analyzeArray([])).toEqual(null);
});
