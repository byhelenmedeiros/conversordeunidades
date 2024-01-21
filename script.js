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

    // Converter para metros
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

    let resultMetros;
    switch (toValue) {
        case "m":
            resultMetros = metros;
            break;
        case "km":
            resultMetros = metros / 1000;
            break;
        case "cm":
            resultMetros = metros * 100;
            break;
        case "mm":
            resultMetros = metros * 1000;
            break;
    }
    // Converter para quilometros
    let km;
    switch (fromValue) {
        case "m":
            km = parseFloat(inputElement.value);
            break;
        case "km":
            km = parseFloat(inputElement.value) * 1000;
            break;
        case "cm":
            km = parseFloat(inputElement.value) / 100;
            break;
        case "mm":
            km = parseFloat(inputElement.value) / 1000;
            break;
    }

    let resultKM;
    switch (toValue) {
        case "m":
            resultKM = km;
            break;
        case "km":
            resultKM = km / 1000;
            break;
        case "cm":
            resultKM = km * 100;
            break;
        case "mm":
            resultKM = km * 1000;
            break;
    }
        let cm;
        switch (fromValue) {
            case "m":
                cm = parseFloat(inputElement.value);
                break;
            case "km":
                cm = parseFloat(inputElement.value) * 1000;
                break;
            case "cm":
                cm = parseFloat(inputElement.value) / 100;
                break;
            case "mm":
                cm = parseFloat(inputElement.value) / 1000;
                break;
        }

        let resultCM;
        switch (toValue) {
            case "m":
                resultCM = cm;
                break;
            case "km":
                resultCM = cm / 1000;
                break;
            case "cm":
                resultCM = cm * 100;
                break;
            case "mm":
                resultCM = cm * 1000;
                break;
        }
        let mm;
        switch (fromValue) {
            case "m":
                mm = parseFloat(inputElement.value);
                break;
            case "km":
                mm = parseFloat(inputElement.value) * 1000;
                break;
            case "cm":
                mm = parseFloat(inputElement.value) / 100;
                break;
            case "mm":
                mm = parseFloat(inputElement.value) / 1000;
                break;
        }

        let resultMM;
        switch (toValue) {
            case "m":
                resultMM = mm;
                break;
            case "km":
                resultMM = mm / 1000;
                break;
            case "cm":
                resultMM = mm * 100;
                break;
            case "mm":
                resultMM = mm * 1000;
                break;
        }

    outputElement.value = result;
    const message = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`;
    messageElement.textContent = message;
}

convertButton.addEventListener("click", convert);
