function main() {
    const layouts = document.querySelectorAll(".layout")

    layouts.forEach(layout => {
        renderDots(layout)
    })

    printChart();
}

function renderDots(parent) {
    const dotSize = 4
    const dotSpacing = 35
    const opacity = 0.1

    const width = window.innerWidth + 60
    const height = parent.getBoundingClientRect().height + 30
    
    const numCols = Math.floor(width / (dotSize + dotSpacing))
    const numRows = Math.floor(height / (dotSize + dotSpacing))

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const dot = document.createElement('div');
            dot.style.width = dotSize + 'px';
            dot.style.height = dotSize + 'px';
            dot.style.backgroundColor = 'white';
            dot.style.opacity = opacity;
            dot.style.zIndex = 1
            dot.style.position = 'absolute';
            dot.style.top = i * (dotSize + dotSpacing) + 'px';
            dot.style.left = j * (dotSize + dotSpacing) + 'px';
            parent.appendChild(dot);
        }
    }
}

function printChart() {
    const ctx = document.getElementById("myChart")

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["2020", "2024"],
            datasets: [
                {
                    label: "Value",
                    data: [46000000000, 800000000000],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    })
}

document.addEventListener("DOMContentLoaded", main)