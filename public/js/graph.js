let graph = document.getElementById('barGraph').getContext('2d')

Chart.defaults.global.defaultFontFamily = "Arial";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = '#FFFFFF'

let barGraph = new Chart(graph, {
    type: 'horizontalBar',
    data: {
        labels: ['Comedy', 'Drama', 'Horror', 'Scifi', 'Action', 'Romance'],
        datasets: [{
            label: 'Quantity',
            data: [20, 12, 18, 22, 9, 9], //this needs to change to data from database 
            backgroundColor: [
                'rgba(214, 40, 40, 0.7)',
                'rgba(247, 127, 0, 0.7)',
                'rgba(252, 191, 73, 0.7)',
                'rgba(234, 226, 183, 0.7)',
                'rgba(0, 48, 73, 0.7)',
                'rgba(69, 123, 157, 0.7)'
            ],
            borderWidth: 1,
            borderColor: '#000',
            hoverBorderWidth: 3,
            hoverBorderColor: '#FFFFFF'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Total Movies Per Genre!',
            fontSize: 28,
            position: 'bottom'
        },
        legend: {
            display: false,
            position: 'right',
            labels: {
                fontColor: '#FFFFFF'
            },
            backgroundColor: '#000'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 25
            }
        },
        tooltips: {
            enabled: true
        },
        animation: {
            duration: 8000,
            onProgress: function(animation){
                graph.value = animation.currentStep / animation.numSteps
            },
            onComplete: function (){
                window.setTimeout(function(){
                    graph.value = 0;
                }, 2000)
            }
        }
    }
});

