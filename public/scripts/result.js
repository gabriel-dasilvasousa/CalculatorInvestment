const ctx = document.getElementById("myChart").getContext("2d");

const total = document.querySelector("input[id=total]").value
const acumulate = document.querySelector("input[id=acumulate]").value
const interest = document.querySelector("input[id=interest]").value

const myChart = new Chart(ctx, {
        type: 'doughnut',

        data: {
            labels: ['Value Investied', 'Interest'],
            datasets: [{
                label: 'Values',
                backgroundColor: ['purple', 'rgb(255,102,102)'],
                borderColor: 'rgb(79,47,79)',
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

const btn = document.querySelector("button[id=return]").onclick = function(){
    location.href="/";
}

