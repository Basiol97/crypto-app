import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  backGroundcolor?: string;
  background?: string;
  percent?: number;
  activeButton?: boolean;
  theme?: string;
  width?: number;
}

export const BarChartContainer = styled.div`
  width: 48%;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    display: none;
  }
`;

export const BarChartInnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30.5%;
  height: 27.6%;
  text-align: start;
  margin-left: 30px;
  padding: 10px;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 70%;
    font-size: 16px;
  }
`;

export const BarChartOuterContainer = styled.div`
  position: relative;
  min-height: 270px;
  margin: 0 auto;
  padding: 30px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px;
    border-radius: 10px;
  }
`;

export const CarouselContainer = styled.div`
  margin: 70px auto 30px auto;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.tablets}) {
    display: none;
  }
`;

export const RotatingLinesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartsDisplayConverterContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.main};
  gap: 15%;
  padding: 1% 1%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  min-width: 35%;
  max-width: 35%;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tablets}) {
    min-width: 45%;
    padding: 1% 5%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-width: 95%;
    margin: 0 auto 30px auto;
  }
`;

export const ChartsInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 5px auto;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    justify-content: center;
  }
`;

export const ChartsOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 30px auto 0 auto;
  width: 95%;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    flex-direction: column;
  }
`;

export const CoinListInnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 98%;
  }
`;

export const CoinListOuterContainer = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 60px auto 0 auto;
  background-color: ${({ theme }) => theme.fourthly};
`;

export const Date = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const LineChartContainer = styled.div`
  width: 48%;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    display: none;
  }
`;

export const LineChartInnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30.5%;
  height: 27.6%;
  text-align: start;
  margin-left: 35px;
  padding: 10px;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 70%;
    font-size: 16px;
  }
`;

export const LineChartOuterContainer = styled.div`
  position: relative;
  min-height: 270px;
  margin: 0 auto;
  padding: 30px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px;
    border-radius: 10px;
  }
`;

export const OverView = styled.h4`
  text-align: start;
  margin: 20px 0 15px 0;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    display: none;
  }
`;

export const SevenDaysRow = styled.td`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const TwentyFourHoursRow = styled.td`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Symbol = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const Volume = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const Cricle = styled.div<Props>`
  border-radius: 50%;
  height: 0.2rem;
  width: 0.2rem;
  margin: auto 0.2rem;
  display: inline-block;
  background-color: ${(props) =>
    props.backGroundcolor === "#FFB528"
      ? "#FEE158"
      : props.backGroundcolor === "#474C77"
      ? "#8A92B2"
      : props.backGroundcolor === "#FE7D43"
      ? "#FE7D43"
      : props.backGroundcolor === "#B3404A"
      ? "#F4B2B0"
      : props.backGroundcolor === "#74D0B4"
      ? "#B5F5E2"
      : props.backGroundcolor === "#2775C9"
      ? "#D3DFEB"
      : "#F0F1F5"};
`;

export const CirculatingTotalSup = styled.th`
  width: 17.5%;
  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: none;
  }
`;

export const Container = styled.div<Props>`
  height: 8px;
  min-width: 100%;
  background-color: ${(props) =>
    props.backGroundcolor === "#FFB528"
      ? "#FEE158"
      : props.backGroundcolor === "#474C77"
      ? "#8A92B2"
      : props.backGroundcolor === "#FE7D43"
      ? "#FFDCCE"
      : props.backGroundcolor === "#B3404A"
      ? "#F4B2B0"
      : props.backGroundcolor === "#74D0B4"
      ? "#B5F5E2"
      : props.backGroundcolor === "#2775C9"
      ? "#72AAE5"
      : "#F0F1F5"};
  position: relative;
  border-radius: 10px;
  margin: auto 0;
  overflow: hidden;
  border: none;
  margin-right: auto;
`;

export const CryptoTableInnerContainer = styled.div`
  min-height: 70vh;
  margin: 0 auto 60px auto;
  background-color: ${({ theme }) => theme.main};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-height: 30px;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      background: white;
      max-height: 5px;
      max-width: 5px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(6, 213, 84);
      border-radius: 10px;
    }
  }
`;

export const CryptoTableOuterContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  table {
    border-collapse: collapse;
    color: ${({ theme }) => theme.secondary};
  }
  th {
    text-align: start;
    padding: 15px;
    font-size: 11px;
  }
  td {
    border-bottom: 1px solid #707070;
    text-align: start;
    padding: 15px;
    font-size: 12px;
    font-weight: bold;
    p {
      color: ${({ theme }) => theme.secondary};
      font-size: 10px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 10px;
    }
  }
`;

export const Icon = styled.th`
  width: 5%;
`;

export const ImageContainer = styled.div`
  gap: 5px;
  img {
    width: 30px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 25px;
    }
  }
`;

export const LeftCircle = styled.div<Props>`
  border-radius: 50%;
  height: 0.2rem;
  width: 0.2rem;
  margin: auto 0.2rem;
  display: inline-block;
  background-color: ${(props) => props.backGroundcolor};
`;

export const LeftItem = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftPrice = styled.div`
  font-family: "Rubik", sans-serif;
  color: ${(props) => props.color};
`;

export const MarketCapVsVolumeOuterContainer = styled.td`
  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: none;
  }
`;

export const CirculatingVsSupplyOuterContainer = styled.td`
  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: none;
  }
`;

export const MarketCapVsVolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CirculatingVsSupplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: none;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarketCapTotalVolumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
`;

export const NameContainer = styled(Link)`
  color: ${({ theme }) => theme.secondary};
  margin: auto 0;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  }
`;

export const NameAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  img {
    width: 30px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 25px;
    }
  }
`;

export const NegativePriceChangePercentage = styled.div`
  color: #fe1040;
`;

export const OneHour = styled.th`
  width: 5%;
`;

export const PostivePriceChangePercentage = styled.div`
  color: #00fc2a;
`;

export const Price = styled.div`
  font-family: "Rubik", sans-serif;
`;

const BaseBox = styled.div`
  height: 100px;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  border: none;
`;

export const Progress = styled(BaseBox)<Props>`
  background: ${(props) => props.background};
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent! < 2 ? "2" : percent)}%;
`;

export const RightCircle = styled.div<Props>`
  border-radius: 50%;
  height: 0.2rem;
  width: 0.2rem;
  margin: auto 0.2rem;
  display: inline-block;
  background-color: ${(props) =>
    props.backGroundcolor === "#FFB528"
      ? "#FEE158"
      : props.backGroundcolor === "#474C77"
      ? "#8A92B2"
      : props.backGroundcolor === "#FE7D43"
      ? "#FFDCCE"
      : props.backGroundcolor === "#B3404A"
      ? "#F4B2B0"
      : props.backGroundcolor === "#74D0B4"
      ? "#B5F5E2"
      : props.backGroundcolor === "#2775C9"
      ? "#72AAE5"
      : "#F0F1F5"};
`;

export const RightItem = styled.div`
  display: flex;
  align-items: center;
`;

export const RightPrice = styled.div<Props>`
  font-family: "Rubik", sans-serif;
  color: ${(props) =>
    props.color === "#FFB528"
      ? "#FEE158"
      : props.color === "#474C77"
      ? "#8A92B2"
      : props.color === "#FE7D43"
      ? "#FFDCCE"
      : props.color === "#B3404A"
      ? "#F4B2B0"
      : props.color === "#74D0B4"
      ? "#B5F5E2"
      : props.color === "#2775C9"
      ? "#D3DFEB"
      : "#F0F1F5"};
`;

export const SevenDays = styled.th`
  width: 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const SparkLineContainer = styled.th`
  text-align: start;
  margin: 0 auto;
  width: 20%;
  @media (max-width: ${({ theme }) => theme.laptopL}) {
    display: none;
  }
`;

export const LineContainer = styled.div`
  width: 100px;
`;

export const TableContainer = styled.table`
  width: 100%;
`;

export const FilterDataBy = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  align-items: center;
  span {
    background-color: ${({ theme }) => theme.fourthly};
    padding: 5px;
    font-size: 13px;
    border-radius: 10px;
    margin: auto 0;
  }
`;

export const SortItem = styled.span`
  margin-left: 5px;
  &:hover {
    color: lightgreen;
    cursor: pointer;
  }
`;

export const TableHeader = styled.thead`
  font-family: "Poppins", sans-serif;
  font-size: 10px;
`;

export const TableItemsContainer = styled.td`
  display: flex;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  div {
    flex: auto;
    font-family: "Poppins", sans-serif;
    font-size: 11px;
    font-weight: 900;
    border-bottom: 1px solid #707070;
  }
`;

export const TableName = styled.th`
  width: 20%;
`;

export const TablePrice = styled.th`
  width: 5%;
`;

export const TwentyFourHours = styled.th`
  width: 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const VolMarketCap = styled.th`
  width: 17.5%;
  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: none;
  }
`;

export const Button = styled.div<Props>`
  padding: 8px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props) =>
    props.activeButton ? "#2172E5" : `props.theme.main`};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
`;

export const SpinnerContainer = styled.div`
  margin: 0 auto;
`;

export const SparkLineRowContainer = styled.td`
  @media (max-width: ${({ theme }) => theme.laptopL}) {
    display: none;
  }
`;
