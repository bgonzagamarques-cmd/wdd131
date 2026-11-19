const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;

const temperatura = 28;
const velocidadeVento = 12;

function calcularSensacaoTermica(temp, vento) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1) + " °C";
}

const sensacaoTermicaSpan = document.querySelector("#sensacao-termica");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacaoTermicaSpan.textContent = calcularSensacaoTermica(temperatura, velocidadeVento);
} else {
    sensacaoTermicaSpan.textContent = "N/A";
}