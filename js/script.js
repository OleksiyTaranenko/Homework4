function convertCToF(celsius) {
    return celsius * 9/5 + 32;
};

let cToF = convertCToF(30);

function convertCToK(celsius) {
    return celsius + 273.15;
};

let cToK = convertCToK(30);

function convertFToC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
};

let fToC = convertFToC(86);

function convertFToK(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
};

let fToK = convertFToK(86);

function convertKToC(kelvin) {
    return kelvin - 273.15;
};

let kToC = convertKToC(303.15);

function convertKToF(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
};

let kToF = convertKToF(303.15);

function convert(degrees, scale) {    
    if (scale == 'celsius') return console.log(degrees + '°C is ' + cToF + '°F is ' +  cToK + '°K');
    if (scale == 'fahrenheit') return console.log(degrees + '°F is ' + fToC + '°C is ' + fToK + '°K');
    if (scale == 'kelvin') return console.log(degrees + '°K is ' + kToC + '°C is ' + kToF + '°F');    
}    
    
convert(86, 'fahrenheit');