
let canvas = document.querySelector('#bridges-chart')
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge. \nSpan of 1298.4", "Golden Gate Bridge. \nSpan of 1280.2", 
        "Mackinac Bridge. \nSpan of 1158.0", "George Washington Bridge. \nSpan of 1067.0", 
        "Tacoma Narrows Bridge.\nSpan of 853.44"],  
        datasets: [{
            label: 'Bridges',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],   // this is the chart data
            backgroundColor: ['black', 'gold', 'green', 'red', 'blue']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
