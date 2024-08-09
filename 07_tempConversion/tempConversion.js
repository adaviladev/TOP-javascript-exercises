const convertToCelsius = function(number) {
  let celcius = (number - 32) * (5/9);
  let rounded = Math.round(celcius * 10) / 10;
  return parseFloat(rounded);
};

  
const convertToFahrenheit = function(number) {
  let fahrenheit = (number * (9/5)) + 32
  let rounded = Math.round(fahrenheit * 10) / 10;
  return parseFloat(rounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
