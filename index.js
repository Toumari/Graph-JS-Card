const ctx = document.getElementById("myChart");
const dateString = Date.now();

const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const day = new Date(dateString)
  .toLocaleString("en-us", { weekday: "long" })
  .slice(0, 3)
  .toLowerCase();

new Chart(ctx, {
  type: "bar",
  data: {
    labels: chartData.map((data) => data.day),
    hoverBackgroundColor: "green",
    datasets: [
      {
        label: "$",

        backgroundColor: chartData.map((data) => {
          if (data.day === day) {
            return "#76b5bc";
          }
          return "#ec775f";
        }),
        hoverBackgroundColor: chartData.map((data) => {
          if (data.day === day) {
            return "#c6e2e4";
          }
          return "#eda394";
        }),
        data: chartData.map((data) => data.amount),

        borderRadius: 5,
        border: 0,
      },
    ],
  },

  options: {
    plugins: {
      tooltip: {
        enabled: true,
        displayColors: false,
        yAlign: "bottom",
        xAlign: "center",
        backgroundColor: "#333",
        textAlign: "center",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
    },
  },
});
