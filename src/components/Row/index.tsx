import React from "react";
import SparkLine from "components/SparkLine/SparkLine";
import { RootState } from "store/index";
import { useState } from "react";
import { useSelector } from "react-redux";
import tableCoinPriceFormat from "utilities/tableCoinPriceFormat/index";
import handlecurrencySymbol from "utilities/handlecurrencySymbol";
import formatValue from "utilities/formatValue/formatValue";
import {
  Container,
  Progress,
  NameContainer,
  MarketCapVsVolumeOuterContainer,
  MarketCapVsVolumeContainer,
  CirculatingVsSupplyContainer,
  LeftItem,
  RightItem,
  MarketCapTotalVolumeContainer,
  CirculatingVsSupplyOuterContainer,
  LeftPrice,
  RightPrice,
  RightCircle,
  LeftCircle,
  SparkLineRowContainer,
  SevenDaysRow,
  TwentyFourHoursRow,
  NameAndImageContainer,
} from "pages/CoinList/CoinList.styled";

interface Props {
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
  index: number;
}

const Row = ({
  image,
  id,
  name,
  symbol,
  current_price,
  price_change_percentage_1h_in_currency,
  price_change_percentage_24h_in_currency,
  price_change_percentage_7d_in_currency,
  total_volume,
  market_cap,
  circulating_supply,
  total_supply,
  sparkline_in_7d,
  index,
}: Props) => {
  const { currencyType } = useSelector(
    (state: RootState) => state.currencyType
  );

  const [colors, setColors] = useState([
    "#FFB528",
    "#474C77",
    "#FE7D43",
    "#B3404A",
    "#74D0B4",
    "#2775C9",
  ]);

  const colorIndex = Math.floor(Math.random() * (colors.length - 0) + 0);

  const backgroundColor = colors[colorIndex];
  const formatSparkLineData = () => {
    const sparkLineData = sparkline_in_7d?.price
      ?.filter((item, index: number) => index % 2 == 0)
      .filter((item, index: number) => Math.abs(index % 2) == 1)
      .filter((item, index: number) => index % 2 == 0);
    return sparkLineData;
  };

  const sparkLineData = formatSparkLineData();
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <NameAndImageContainer>
          <img src={image} alt={"ImageContainer"} />
          <NameContainer to={`/coinpage/${id}`}>
            <span>
              {name} ({symbol})
            </span>
          </NameContainer>
        </NameAndImageContainer>
      </td>
      <td>
        {handlecurrencySymbol(currencyType)}
        {current_price}
      </td>
      <td>{formatValue(price_change_percentage_1h_in_currency)}</td>
      <TwentyFourHoursRow>
        {formatValue(price_change_percentage_24h_in_currency)}
      </TwentyFourHoursRow>
      <SevenDaysRow>
        {formatValue(price_change_percentage_7d_in_currency)}
      </SevenDaysRow>
      <MarketCapVsVolumeOuterContainer>
        <MarketCapVsVolumeContainer>
          <MarketCapTotalVolumeContainer>
            <LeftItem>
              <LeftCircle backGroundcolor={backgroundColor} />
              <LeftPrice color={backgroundColor}>
                {tableCoinPriceFormat(total_volume)}
              </LeftPrice>
            </LeftItem>
            <RightItem>
              <RightCircle backGroundcolor={backgroundColor} />
              <RightPrice color={backgroundColor}>
                {tableCoinPriceFormat(market_cap)}
              </RightPrice>
            </RightItem>
          </MarketCapTotalVolumeContainer>
          <Container backGroundcolor={backgroundColor} width={100}>
            <Progress
              background={backgroundColor}
              percent={(total_volume / market_cap) * 100}
            />
          </Container>
        </MarketCapVsVolumeContainer>
      </MarketCapVsVolumeOuterContainer>
      <CirculatingVsSupplyOuterContainer>
        <CirculatingVsSupplyContainer>
          <MarketCapTotalVolumeContainer>
            <LeftItem>
              <LeftCircle backGroundcolor={backgroundColor} />
              <LeftPrice color={backgroundColor}>
                {tableCoinPriceFormat(circulating_supply)}
              </LeftPrice>
            </LeftItem>
            <RightItem>
              <RightCircle backGroundcolor={backgroundColor} />
              <RightPrice color={backgroundColor}>
                {tableCoinPriceFormat(total_supply)}
              </RightPrice>
            </RightItem>
          </MarketCapTotalVolumeContainer>
          <Container backGroundcolor={backgroundColor} width={100}>
            <Progress
              background={backgroundColor}
              percent={(circulating_supply / total_supply) * 100}
            />
          </Container>
        </CirculatingVsSupplyContainer>
      </CirculatingVsSupplyOuterContainer>
      <SparkLineRowContainer>
        <SparkLine
          labelArray={Array(sparkLineData?.length).fill(0)}
          price_change_percentage_7d_in_currency={
            price_change_percentage_7d_in_currency
          }
          simplifiedData={sparkLineData}
        />
      </SparkLineRowContainer>
    </tr>
  );
};

export default Row;
