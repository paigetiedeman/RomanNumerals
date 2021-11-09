// numerals = [ "M", "CM","D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",];

export default function convertRoman(num) {
  if (isNaN(num)) {
    return NaN;
  }
  if (num <= 0){
    return "";
  }
  if (num % 1000 === 0) { 
    return "M";
  }
  if (num % 900 === 0) { 
    return "CM";
  }
  if (num % 500 === 0) {
    return "D";
  }
  if (num % 400 === 0) {
    return "CD";
  }
  if (num % 100 === 0) {
    return "C";
  }
  if (num % 90 === 0) {
    return "XC";
  }
  if (num % 50 == 0) {
    return "L";
  }
  if (num % 40 == 0) {
    return "XL";
  }
  if (num % 10 === 0) {
    return "X";
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