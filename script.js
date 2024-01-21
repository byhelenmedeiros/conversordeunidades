const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const messageElement = document.querySelector("#message");
const convertButton = document.querySelector("#convert-btn");

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    if (fromValue === toValue) {
        const errorValue = `A unidade ${fromLabel} é igual a ${toLabel}, por favor verifique as unidades para efetuar a conversão.`;
        messageElement.textContent = errorValue;
        outputElement.value = '';
        return;
    }

    // Converter 
    let metros;
    switch (fromValue) {
        case "m":
            metros = parseFloat(inputElement.value);
            break;
        case "km":
            metros = parseFloat(inputElement.value) * 1000;
            break;
        case "cm":
            metros = parseFloat(inputElement.value) / 100;
            break;
        case "mm":
            metros = parseFloat(inputElement.value) / 1000;
            break;
    }

    let result;
    switch (toValue) {
        case "m":
            result = metros;
            break;
        case "km":
            result = metros / 1000;
            break;
        case "cm":
            result = metros * 100;
            break;
        case "mm":
            result = metros * 1000;
            break;
    }

    outputElement.value = result;
    const message = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`;
    messageElement.textContent = message;
}

convertButton.addEventListener("click", convert);
