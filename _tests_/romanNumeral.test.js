import convertRoman from "../src/js/scripts.js";

describe('convertRoman', () => {
  test('should return NaN if argument is NaN', () => {
    expect(convertRoman("hello")).toEqual(NaN);
  });

  test('should return I for 1', () => {
    expect(convertRoman(1)).toEqual("I");
  });
});