let myString = "Hello, World!";
let myNumber = 42;
let isTrue = true;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}


//Changing text content
function updateText() {
    document.getElementById("demo").innerHTML = "Text updated!";
}

//  Changing styles
function changeStyle() {
    document.getElementById("myElement").style.color = "red";
}

// Show/hide elements
function toggleVisibility() {
    let element = document.getElementById("toggleElement");
    element.style.display = (element.style.display === "none") ? "block" : "none";
}

//  Event listeners
document.getElementById("myButton").addEventListener("click", function() {
    // Handle click event
});


let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example: Update chart data
function updateChart() {
    myChart.data.datasets[0].data = [10, 15, 7, 8, 5, 9];
    myChart.update();
}
