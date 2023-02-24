import React from "react";
import Row from "components/Row/index";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import {
  TableContainer,
  TableHeader,
  SparkLineContainer,
  Icon,
  TableName,
  TablePrice,
  OneHour,
  TwentyFourHours,
  SevenDays,
  VolMarketCap,
  CirculatingTotalSup,
} from "pages/CoinList/CoinList.styled";

interface Item {
  image: string;
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
  circulating_supply: number;
  total_supply: number;
  sparkline_in_7d: { price: number[] };
}

const Table = () => {
  const { coinsData } = useSelector((state: RootState) => state.coinList);
  return (
    <div>
      <TableContainer>
        <TableHeader>
          <tr>
            <Icon>#</Icon>
            <TableName>Name</TableName>
            <TablePrice>Price</TablePrice>
            <OneHour>1h% </OneHour>
            <TwentyFourHours>24h%</TwentyFourHours>
            <SevenDays>7d%</SevenDays>
            <VolMarketCap>24h Vol / Market Cap</VolMarketCap>
            <CirculatingTotalSup>Circulating / Total Sup</CirculatingTotalSup>
            <SparkLineContainer>Last 7d</SparkLineContainer>
          </tr>
        </TableHeader>
        <tbody>
          {coinsData?.map((item: Item, index: number) => (
            <Row key={index} index={index} {...item} />
          ))}
        </tbody>
      </TableContainer>
    </div>
  );
};

export default Table;
