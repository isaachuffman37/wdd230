const temperatureFahrenheit = parseInt(document.getElementById("current-temp").innerText);
const windSpeedMph = parseInt(document.getElementById("wind-speed").innerText);

const windChill = calculateWindChill(temperatureFahrenheit, windSpeedMph);

// Update the content of the HTML element with id "wind-chill"
document.getElementById("wind-chill").innerHTML = `Wind Chill Factor: ${windChill} °F`;


function calculateWindChill(temperatureFahrenheit, windSpeedMph) {
    // Check if conditions are within the formula's valid range
    if (temperatureFahrenheit > 50 || windSpeedMph < 3) {  
      return "N/A";
    }
  
    // Formula for calculating Wind Chill Factor
    const windChillFactor =
      35.74 +
      0.6215 * temperatureFahrenheit -
      35.75 * Math.pow(windSpeedMph, 0.16) +
      0.4275 * temperatureFahrenheit * Math.pow(windSpeedMph, 0.16);
  
    return windChillFactor.toFixed(2); // Return the result rounded to two decimal places
  }