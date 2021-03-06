function romanConverter(arabic){
  var roman ="";

  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (var i = 0; i < symbols.length; i++) {
    while (arabic >= decimals[i]) {
      roman += symbols[i];
      arabic -= decimals[i];
    }
  }
  return roman;
}
