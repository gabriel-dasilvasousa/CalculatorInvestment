var ctx = document.getElementById("myChart").getContext("2d");
var valor = document.querySelector("input[id=total]");
var v2 = document.querySelector("input[id=acumulate]");
var v3 = document.querySelector("input[id=interest]");

var total = valor.value;
var acumulate = v2.value;
var interest = v3.value;

// console.log(parseFloat(total).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits:2}))
// console.log(parseFloat(total).toFixed(2), parseFloat(acumulate).toFixed(2), parseFloat(interest).toFixed(2))

var myChart = new Chart(ctx, {
        type: 'doughnut',

        data: {
            labels: ['Value Investied', 'Interest'],
            datasets: [{
                label: 'Values',
                backgroundColor: ['purple', 'rgb(255,102,102)'],
                borderColor: 'grey',
                data: [parseFloat(acumulate).toFixed(2), parseFloat(interest).toFixed(2)]
            }]
        },

        options: {
            cutoutPercentage: 75,
            legend: {
                display: true,
                labels: {
                    fontColor: 'white'
                },
                position: 'bottom'
            }
        }
});



