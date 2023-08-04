function convertTemperature() {
      var temperatureInput = document.getElementById("temperature").value;
      var unitInput = document.getElementById("unit").value;

      if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for the temperature.");
        return;
      }

      var temperature = parseFloat(temperatureInput);
      var resultElement = document.getElementById("result");

      if (unitInput === "celsius") {
        var convertedTemperatureFahrenheit = (temperature * 9/5) + 32;
        var convertedTemperatureKelvin = temperature + 273.15;

        resultElement.innerHTML = "Converted Temperature:<br>"
          + "Fahrenheit: " + convertedTemperatureFahrenheit.toFixed(2) + " °F<br>"
          + "Kelvin: " + convertedTemperatureKelvin.toFixed(2) + " K";
      } else if (unitInput === "fahrenheit") {
        var convertedTemperatureCelsius = (temperature - 32) * 5/9;
        var convertedTemperatureKelvin = (temperature - 32) * 5/9 + 273.15;

        resultElement.innerHTML = "Converted Temperature:<br>"
          + "Celsius: " + convertedTemperatureCelsius.toFixed(2) + " °C<br>"
          + "Kelvin: " + convertedTemperatureKelvin.toFixed(2) + " K";
      } else if (unitInput === "kelvin") {
        var convertedTemperatureCelsius = temperature - 273.15;
        var convertedTemperatureFahrenheit = (temperature - 273.15) * 9/5 + 32;

        resultElement.innerHTML = "Converted Temperature:<br>"
          + "Celsius: " + convertedTemperatureCelsius.toFixed(2) + " °C<br>"
          + "Fahrenheit: " + convertedTemperatureFahrenheit.toFixed(2) + " °F";
      }
    }