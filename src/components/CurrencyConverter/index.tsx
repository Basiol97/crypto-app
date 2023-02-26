import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import handlecurrencySymbol from "utilities/handlecurrencySymbol/index";
import { FaExchangeAlt } from "react-icons/fa";
import formatPrice from "utilities/formatPrice";
import {
  CurrencyCoverterContainer,
  CurrencyContainer,
  ExchangeIconContainer,
  BtcContainer,
  CurrencyType,
  Currency,
} from "pages/CoinPage/CoinPage.styled";

const CurrencyConverter = () => {
  const currencyType = useSelector(
    (state: RootState) => state.currencyType.currencyType
  );
  const { coinData } = useSelector((state: RootState) => state.coinPage);

  interface Currency {
    usd: number;
    gbp: number;
    eur: number;
    btc: number;
  }

  return (
    <CurrencyCoverterContainer>
      <CurrencyContainer>
        <CurrencyType>{currencyType} </CurrencyType>
        <Currency>
          {handlecurrencySymbol(currencyType)}
          {formatPrice(
            coinData.market_data?.current_price[currencyType as keyof Currency]
          )}
        </Currency>
      </CurrencyContainer>
      <ExchangeIconContainer>
        <FaExchangeAlt size={20} />
      </ExchangeIconContainer>
      <BtcContainer>
        <CurrencyType>BTC</CurrencyType>
        <Currency>
          {handlecurrencySymbol(currencyType)}
          {formatPrice(coinData.market_data?.current_price.btc)}
        </Currency>
      </BtcContainer>
    </CurrencyCoverterContainer>
  );
};

export default CurrencyConverter;
