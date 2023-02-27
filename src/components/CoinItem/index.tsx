import React from "react";
import { RootState } from "store/index";
import { useSelector } from "react-redux";
import { FaCoins } from "react-icons/fa";
import toFixed from "utilities/toFixed/inedx";
import formatDate from "utilities/formatDate";
import formatPrice from "utilities/formatPrice";
import handlecurrencySymbol from "utilities/handlecurrencySymbol";
import {
  LeftOuterContainer,
  RightContainer,
  LeftInnerContainer,
  MarketPriceLabel,
  MarketPriceContainer,
  PriceColorFormatter,
  CoinLabel,
  YourCoinsContainer,
  CoinsContainer,
  PriceContainer,
} from "pages/Portfolio/Portfolio.styled";
import { CoinImage, CoinName } from "pages/CoinPage/CoinPage.styled";

interface Props {
  image: { small: string };
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  circulating_supply: number;
  total_supply: number;
  amount: number;
  currentPrice: number;
  previousPrice: number;
  last_updated: string;
  id: string;
  isBigger: boolean;
}

const CoinItem = (props: Props) => {
  const currencyType = useSelector((state: RootState) => state.currencyType.currencyType);
  return (
    <CoinsContainer>
      <LeftOuterContainer>
        <LeftInnerContainer>
          <CoinImage src={props.image?.small} />
          <CoinName>
            {props.name} <span>({props.symbol})</span>
          </CoinName>
        </LeftInnerContainer>
      </LeftOuterContainer>
      <RightContainer>
        <MarketPriceLabel>Market price</MarketPriceLabel>
        <MarketPriceContainer>
          <div>
            Price now:
            <PriceContainer>
              {handlecurrencySymbol(currencyType)}
              {formatPrice(props?.currentPrice)}
            </PriceContainer>
          </div>
          <div>
            Price 24h chg:
            <PriceColorFormatter priceValue={props.price_change_percentage_24h}>
              {handlecurrencySymbol(currencyType)}
              {toFixed(props.price_change_percentage_24h)}%
            </PriceColorFormatter>
          </div>
          <div>
            Vol / Mrkt Cap:
            <PriceContainer>
              {formatPrice(props.total_volume / props.market_cap)}
            </PriceContainer>
          </div>
          <div>
            Circ / Total Sup:
            <PriceContainer>
              {handlecurrencySymbol(currencyType)}{" "}
              {formatPrice(props.circulating_supply / props.total_supply)}
            </PriceContainer>
          </div>
        </MarketPriceContainer>
        <CoinLabel>
          Your coin
          <div>
            <FaCoins size={13} />
          </div>
        </CoinLabel>
        <YourCoinsContainer>
          <div>
            Coin ammount:
            <PriceContainer>{props.amount ? props.amount : 1}</PriceContainer>
          </div>
          <div>
            Ammount value:
            <PriceContainer>
              {handlecurrencySymbol(currencyType)}
              {formatPrice(
                (props.amount > 0 ? props.amount : 1) * props?.currentPrice
              )}
            </PriceContainer>
          </div>
          <div>
            Price Change since purchase:
            <PriceColorFormatter
              priceValue={props.currentPrice - props.previousPrice}
            >
              {handlecurrencySymbol(currencyType)}
              {toFixed(
                props.currentPrice - props.previousPrice
                  ? props.currentPrice - props.previousPrice
                  : 0
              )}
            </PriceColorFormatter>
          </div>
          <div>
            Purchase date
            <PriceContainer>{formatDate(props.last_updated)}</PriceContainer>
          </div>
        </YourCoinsContainer>
      </RightContainer>
    </CoinsContainer>
  );
};

export default CoinItem;
