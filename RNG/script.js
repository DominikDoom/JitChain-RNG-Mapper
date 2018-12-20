// Generate Random Numbers
var rndArray = Array.from({length: 10}, () => Math.floor(Math.random() * 51));
console.log(rndArray);
// var sum = input.reduce((a, b) => a + b, 0);
// console.log(sum);
// var random = sum % 50;

var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"],
        datasets: [{
            label: 'Verteilung',
            data: [35,6,13,15,2,27,37,21,34,20,0,1,42,22,43,48,49,7,50,5,12,31,19,3,39,30,9,16,23,25,47,8,18,29,28,36,10,46,4,24,44,32,11,26,33,40,17,14,41,45,38],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});