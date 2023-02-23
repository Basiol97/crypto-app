import React from "react";
import { registerables, Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { RotatingLines } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/index";
import { useEffect } from "react";
import { fetchData } from "store/features/chartsSlice/chartsSlice";
import handlecurrencySymbol from "utilities/handlecurrencySymbol";
import formatPrice from "utilities/formatPrice/index";
import getCurrentDate from "utilities/getCurrentDate/index";
import getChartData from "utilities/getChartData/index";
import getChartLabels from "utilities/getChartLabels";
import {
  BarChartOuterContainer,
  BarChartInnerContainer,
  Price,
  Date as DateValue,
  Volume,
  RotatingLinesContainer,
} from "pages/CoinList/CoinList.styled";
ChartJS.register(...registerables);

const BarChart = () => {
  const currencyType = useSelector(
    (state: RootState) => state.currencyType.currencyType
  );
  const dispatch: AppDispatch = useDispatch();

  const { chartsData, isLoading } = useSelector((state: RootState) => state.chartsData);
  const { buttonsLabels } = useSelector((state: RootState) => state.periodDisplay);
  const periodInDays = buttonsLabels.filter((item) => item.status == true)[0].periodInDays;

  useEffect(() => {
    dispatch(fetchData(currencyType));
  }, []);

  const barChartLabels = getChartLabels(
    chartsData?.total_volumes,
    periodInDays
  );

  const barChartData = getChartData(chartsData?.total_volumes, periodInDays);

  const chartData = {
    labels: barChartLabels,
    datasets: [
      {
        backgroundColor: "#2172E5",
        borderColor: "#90EE90",
        pointBackgroundColor: "#90EE90",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "yellow",
        borderRadius: 10,
        data: barChartData,
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

  const currentPriceValue = barChartData?.slice(-1);
  const hasUSer = !isLoading && barChartData;
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
        <BarChartOuterContainer>
          <BarChartInnerContainer>
            <Volume>Volume 24h</Volume>
            <Price>
              {handlecurrencySymbol(currencyType)}{" "}
              {formatPrice(currentPriceValue)}
            </Price>
            <DateValue>{getCurrentDate()}</DateValue>
          </BarChartInnerContainer>
          <Bar data={chartData} options={options} />
        </BarChartOuterContainer>
      )}
    </div>
  );
};

export default BarChart;
