// numerals = [ "M", "CM","D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",];

export default function convertRoman(num) {
  if (isNaN(num)) {
    return NaN;
  }
  if (num <= 0){
    return "";
  }
  if (num >= 1000 && num < 4000) { 
    const thousands = "M";
    return thousands.repeat(Math.floor(num/1000)).concat(convertRoman(num % 1000));
  }
  if (num >= 900) {
    const nineHundred = "CM";
    return nineHundred.concat(convertRoman(num % 900));
  }
  if (num >= 500 && num < 900) {
    const fiveHundreds = "D";
    return fiveHundreds.repeat(Math.floor(num/500)).concat(convertRoman(num % 500));
  }
  if (num >= 400) {
    const fourHundred = "CD";
    return fourHundred.concat(convertRoman(num % 400));
  }
  if (num >= 100 && num < 400) {
    const hundreds = "C";
    return hundreds.repeat(Math.floor(num/100)).concat(convertRoman(num % 100));
  }
  if (num >= 90) {
    const ninety = "XC";
    return ninety.concat(convertRoman(num % 90));
  }
  if (num >= 50 && num < 90) {
    const fifties = "L";
    return fifties.repeat(Math.floor(num/50)).concat(convertRoman(num % 50));
  }
  if (num >= 40) {
    const forty = "XL";
    return forty.concat(convertRoman(num % 40));
  }
  if (num >= 10 && num < 40) {
    const tens = "X";
    return tens.repeat(Math.floor(num/10)).concat(convertRoman(num % 10));
  } 
  if (num % 9 == 0) {
    return "IX";
  }
  if (num >= 5 && num < 9) {
    const fives = "V";
    return fives.repeat(Math.floor(num/5)).concat(convertRoman(num % 5));
  }
  if (num === 4) {
    return "IV";
  }
  const ones = "I";
  return ones.repeat(num);
}

// export const romanClosure = (numbers => {
//   return function(numerals){
//     return 
//   }
// })