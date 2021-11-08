// numerals = [ "M", "CM","D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",];

export default function convertRoman(num) {
  if (isNaN(num)) {
    return NaN;
  }
  if (num % 9 == 0) {
    return "IX";
  }
  if (num % 5 == 0) {
    return "V";
  }
  if (num === 4) {
    return "IV";
  }
  if (num % 1 == 0 && num < 4) {
    const ones = "I";
    return ones.repeat(num);
  }
}