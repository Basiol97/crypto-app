import React from "react";
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
  return (
    <CoinListOuterContainer>
      <CoinListInnerContainer>
        <ChartsOuterContainer>
          <OverView> Overview</OverView>
          <ChartsInnerContainer>
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
            <LineChartContainer>
              <LineChart />
            </LineChartContainer>
            <BarChartContainer>
              <BarChart />
            </BarChartContainer>
          </ChartsInnerContainer>
        </ChartsOuterContainer>
        <ChartsPeriodConverter />
        <CryptoTable />
      </CoinListInnerContainer>
    </CoinListOuterContainer>
  );
};

export default CoinList;
