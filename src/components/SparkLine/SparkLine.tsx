import React from "react";
import { Line } from "react-chartjs-2";
import { LineContainer } from "pages/CoinList/CoinList.styled";

interface Props {
  labelArray: number[];
  price_change_percentage_7d_in_currency: number;
  simplifiedData: number[];
}

const SparkLine = (props: Props) => {
  const chartData = {
    labels: props.labelArray,
    datasets: [
      {
        borderColor:
          props.price_change_percentage_7d_in_currency > 0
            ? "lightgreen"
            : "red",
        lineTension: 0.7,
        pointBackgroundColor: "rgba(0, 0, 0, 1)",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "rgba(144, 238, 144, 1)",
        pointHoverBorderColor: "rgba(144, 238, 144, 1)",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        data: props.simplifiedData,
        pointRadius: 0,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        position: "false",
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        ticks: {},
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  const hasUSer = true;
  return (
    <div>
      {hasUSer && (
        <LineContainer>
          <Line data={chartData} options={options} />
        </LineContainer>
      )}
    </div>
  );
};

export default SparkLine;
