function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let selectedUnit = document.querySelector('input[name="unit"]:checked').value;

    if (temperature === "" || isNaN(temperature)) {
        document.getElementById("result").innerHTML = "Please enter a valid number!";
        return;
    }

    temperature = parseFloat(temperature);
    let resultText = "";

    if (selectedUnit === "celsius") {
        let fahrenheit = (temperature * 9/5) + 32;
        let kelvin = temperature + 273.15;
        resultText = `${temperature.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K.`;
    } else if (selectedUnit === "fahrenheit") {
        let celsius = (temperature - 32) * 5/9;
        let kelvin = (temperature - 32) * 5/9 + 273.15;
        resultText = `${temperature.toFixed(2)}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K.`;
    } else if (selectedUnit === "kelvin") {
        let celsius = temperature - 273.15;
        let fahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultText = `${temperature.toFixed(2)}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F.`;
    }

    document.getElementById("result").innerHTML = resultText;
}