let temp = "kelvinToFahrenheit";
let celsius = 44;
let fahrenheit = 73;
let kelvin = 285;

switch (temp) {
    case "celsiusToFahrenheit":
        console.log(celsiusToFahrenheit(celsius));
        break;
    case "celsiusToKelvin":
        console.log(celsiusToKelvin(celsius));
        break;
    case "fahrenheitToCelsius":
        console.log(fahrenheitToCelsius(fahrenheit));
        break;
    case "fahrenheitToKelvin":
        console.log(fahrenheitToKelvin(fahrenheit));
        break;
    case "kelvinToCelsius":
        console.log(kelvinToCelsius(kelvin));
        break;
    case "kelvinToFahrenheit":
        console.log(kelvinToFahrenheit(kelvin));
        break;
    default:
        break;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(kelvin) {
    return kelvin + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) / 1.8 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32;
}
