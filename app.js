const submitCelsius = document.getElementById("submitCelsius");
const submitFahrenheit = document.getElementById("submitFahrenheit");
submitCelsius.onclick = function () {
    const celsius = Number(document.getElementById("celsius").value);
if (celsius === "") {
        document.getElementById("celsiusResult").textContent = "Please enter a value";
        return;
    }
const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("celsiusResult").textContent =`${fahrenheit.toFixed(2)} °F`;
};

submitFahrenheit.onclick = function () {
    const fahrenheit = Number(document.getElementById("fahrenheit").value);

    if (fahrenheit === "") {
        document.getElementById("fahrenheitResult").textContent = "Please enter a value";
        return;
    }

    const celsius = (fahrenheit - 32) * 5/9;
document.getElementById("fahrenheitResult").textContent = `${celsius.toFixed(2)} °C`;
};
