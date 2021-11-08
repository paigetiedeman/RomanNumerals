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
  })
});