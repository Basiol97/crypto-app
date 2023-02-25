import React from "react";
import { useState, useEffect } from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import CryptoTable from "components/CryptoTable/index";
import LineChart from "components/LineChart";
import BarChart from "components/BarChart";
import ChartsPeriodConverter from "components/ChartsPeriodConverter";
import {
  CoinListOuterContainer,
  ChartsInnerContainer,
  LineChartContainer,
  BarChartContainer,
  OverView,
  CarouselContainer,
  CoinListInnerContainer,
  ChartsOuterContainer,
} from "pages/CoinList/CoinList.styled";

const CoinList: React.FC = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <CoinListOuterContainer>
      <CoinListInnerContainer>
        <ChartsOuterContainer>
          <OverView> Overview</OverView>
          <ChartsInnerContainer>
            {windowSize[0] <= 850 && (
              <CarouselContainer>
                <CCarousel controls>
                  <CCarouselItem>
                    <LineChart />
                  </CCarouselItem>
                  <CCarouselItem>
                    <BarChart />
                  </CCarouselItem>
                </CCarousel>
              </CarouselContainer>
            )}
            {windowSize[0] > 850 && (
              <>
                <LineChartContainer>
                  <LineChart />
                </LineChartContainer>
                <BarChartContainer>
                  <BarChart />
                </BarChartContainer>
              </>
            )}
          </ChartsInnerContainer>
        </ChartsOuterContainer>
        <ChartsPeriodConverter />
        <CryptoTable />
      </CoinListInnerContainer>
    </CoinListOuterContainer>
  );
};

export default CoinList;
