import React from "react";
import { registerables, Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { RotatingLines } from "react-loader-spinner";
import { RootState, AppDispatch } from "store/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "store/features/chartsSlice/chartsSlice";
import handlecurrencySymbol from "utilities/handlecurrencySymbol";
import formatPrice from "utilities/formatPrice/index";
import getCurrentDate from "utilities/getCurrentDate/index";
import getChartData from "utilities/getChartData/index";
import getChartLabels from "utilities/getChartLabels";
import {
  LineChartOuterContainer,
  LineChartInnerContainer,
  Price,
  Symbol,
  Date as DateValue,
  RotatingLinesContainer,
} from "pages/CoinList/CoinList.styled";
ChartJS.register(...registerables);

const LineChart: React.FC = () => {
  const currencyType = useSelector((state: RootState) => state.currencyType.currencyType);
  const { chartsData, isLoading } = useSelector((state: RootState) => state.chartsData);
  const { buttonsLabels } = useSelector((state: RootState) => state.periodDisplay);
  const dispatch: AppDispatch = useDispatch();
  const periodInDays = buttonsLabels.filter((item) => item.status === true)[0].periodInDays;

  useEffect(() => {
    dispatch(fetchData(currencyType));
  }, [currencyType]);

  const lineChartLabels = getChartLabels(chartsData?.prices, periodInDays);
  const lineChartData = getChartData(chartsData?.prices, periodInDays);

  const chartData = {
    labels: lineChartLabels,
    datasets: [
      {
        lineTension: 0.7,
        borderColor: "rgba(144, 238, 144, 1)",
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
        borderWidth: 3,
        fill: true,
        data: lineChartData,
        pointRadius: 0,
      },
    ],
  };

  const options: any = {
    maintainAspectRatio: false,
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

  const hasUSer = !isLoading && lineChartData;
  const currentPriceValue = lineChartData?.slice(-1);

  return (
    <div>
      {isLoading && (
        <RotatingLinesContainer>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.5"
            width="50"
            visible={true}
          />
        </RotatingLinesContainer>
      )}
      {hasUSer && (
        <div>
          <LineChartOuterContainer>
            <LineChartInnerContainer>
              <Symbol>Price</Symbol>
              <Price>
                {handlecurrencySymbol(currencyType)}
                {formatPrice(currentPriceValue)}
              </Price>
              <DateValue>{getCurrentDate()}</DateValue>
            </LineChartInnerContainer>
            <Line data={chartData} options={options} />
          </LineChartOuterContainer>
        </div>
      )}
    </div>
  );
};

export default LineChart;
