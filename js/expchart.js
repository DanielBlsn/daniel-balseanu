function render_chart() {
        var ctx = $("#chart-line");
        var myLineChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Python', 'MySQL', 'R', 'JavaScript', 'Excel/GSheets', 'Power BI', 'Dash'],
                datasets: [{
                    data: [3.5, 4, 1, 1, 5, 2, 1],
                    label: "Years",
                    borderColor: "#458af7",
                    backgroundColor: "rgba(69, 138, 247, 0.2)",
                    fill: true
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Experience'
                },
				scale: {
					ticks: {
						beginAtZero: true,
						stepSize: 1
					}
				}
            }
        });
    }