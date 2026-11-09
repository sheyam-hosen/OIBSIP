
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const error = document.getElementById("error");

const celsiusResult = document.getElementById("celsius");
const fahrenheitResult = document.getElementById("fahrenheit");
const kelvinResult = document.getElementById("kelvin");

convertBtn.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    error.textContent = "";

    if (temperatureInput.value.trim() === "" || !Number.isFinite(temperature)) {
        error.textContent = "Please enter a valid temperature!";
        return;
    }

    let celsius;

    if (unit === "celsius") {
        celsius = temperature;
    } else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    if (celsius < -273.15) {
        error.textContent = "Temperature cannot be below absolute zero!";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";
});
