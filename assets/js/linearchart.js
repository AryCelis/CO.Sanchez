// Obtener una referencia al elemento canvas del DOM
const $graficalinear = document.querySelector("#graficalinear");
// Las etiquetas son las que van en el eje X. 
const etiquetaslinear = ["Enero", "Febrero", "Marzo", "Abril"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020linear = {
    label: "Ventas por mes",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($graficalinear, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetaslinear,
        datasets: [
            datosVentas2020linear,
            // Aquí más datos...
        ]
    },
    options: {
        resposive: true,
        maintainAspectRadio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});