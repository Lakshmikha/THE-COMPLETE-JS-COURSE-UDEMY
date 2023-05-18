const measureKelvin = function () {
  const temp = {
    unit: "Celsius",
    value: prompt("Enter temperature in Celsius"), //Number() function can be used here too
  };

  const tempKelvin = Number(temp.value) + 273;
  return tempKelvin;
};

console.log(measureKelvin());
