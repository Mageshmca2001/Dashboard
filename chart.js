const ctx = document.getElementById('performanceChart').getContext('2d');
  const performanceChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
              {
                  label: 'Page Views',
                  data: [30, 70, 40, 60, 50, 70, 40, 50, 70, 40, 60, 70],
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1
              },
              {
                  label: 'Clicks',
                  data: [10, 20, 15, 25, 20, 30, 15, 20, 30, 20, 25, 30],
                  type: 'line',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 2,
                  fill: false
              }
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  max: 80
              }
          }
      }
  });