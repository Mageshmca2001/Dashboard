const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Present Day', 'Present Week', 'Present Month'],
        datasets: [
          {
            data: [3000, 18000, 540000],
            backgroundColor: ['#EF4444', '#3B82F6', '#14B8A6'],
            hoverBackgroundColor: ['#F87171', '#60A5FA', '#2DD4BF'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });


    