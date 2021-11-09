import convertRoman from "../src/js/scripts.js";

describe('convertRoman', () => {
  test('should return NaN if argument is NaN', () => {
    expect(convertRoman("hello")).toEqual(NaN);
  });

  test('should return I for 1', () => {
    expect(convertRoman(1)).toEqual("I");
  });

  test('should return IV for 4', () => {
    expect(convertRoman(4)).toEqual("IV");
  });

  test('should return V for 5', () => {
    expect(convertRoman(5)).toEqual("V");
  });

  test('should return IX for 9', () => {
    expect(convertRoman(9)).toEqual("IX");
  });

  test('should return X for 10', () => {
    expect(convertRoman(10)).toEqual("X");
  });

  test('should return XL for 40', () => {
    expect(convertRoman(40)).toEqual("XL");
  });

  test('should return L for 50', () => {
    expect(convertRoman(50)).toEqual("L");
  });

  test('should return XC for 90', () => { 
    expect(convertRoman(90)).toEqual("XC");
  });

  test('should return C for 100', () => { 
    expect(convertRoman(100)).toEqual("C");
  });

  test('should return CD for 400', () => { 
    expect(convertRoman(400)).toEqual("CD");
  });

  test('should return D for 500', () => { 
    expect(convertRoman(500)).toEqual("D");
  });

  test('should return CM for 900', () => { 
    expect(convertRoman(900)).toEqual("CM");
  });

  test('should return M for 1000', () => { 
    expect(convertRoman(1000)).toEqual("M");
  });

  test('should return VIII for 8', () => { 
    expect(convertRoman(8)).toEqual("VIII");
  });

  test('should return CDLII for 452', () => { 
    expect(convertRoman(452)).toEqual("CDLII");
  });
});