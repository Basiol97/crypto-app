import React from "react";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/index";
import {
  fetchDefaultCoins,
  handleSubmit,
  togglePopup,
} from "store/features/portfolioSlice/portfolioSlice";
import Popup from "components/Popup/index";
import CoinItem from "components/CoinItem";
import { RotatingLinesContainer } from "pages/CoinList/CoinList.styled";
import {
  PortfolioOuterContainer,
  PortfolioInnerContainer,
  StatisticsLabel,
  ContentOuterContainer,
  ContentInnerContainer,
  AddAssetButton,
} from "./Portfolio.styled";

export const Portfolio = () => {
  const getCurrentDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  };

  interface Item {
    id: string;
    amount: number;
    last_updated: string;
    previousPrice: number;
    currentPrice: number;
    isBigger: boolean;
    market_cap: number;
    circulating_supply: number;
    image: { small: string };
    total_volume: number;
    name: string;
    symbol: string;
    price_change_percentage_24h: number;
    total_supply: number;
  }

  interface NewItem {
    id: string;
    last_updated: string;
    amount: number;
  }

  const currencyType = useSelector(
    (state: RootState) => state.currencyType.currencyType
  );
  const isOpen = useSelector((state: RootState) => state.portfolio.isOpen);
  const [newPortfolio, setnewPortfolio] = useState<Item[]>([]);
  const portfolio = useSelector(
    (state: RootState) => state.portfolio.portfolio
  );
  const isLoading = useSelector(
    (state: RootState) => state.portfolio.isLoading
  );
  const [value, setValues] = useState<NewItem>({
    id: "",
    last_updated: getCurrentDate(),
    amount: 0,
  });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDefaultCoins(currencyType));
  }, []);

  useEffect(() => {
    dispatch(fetchDefaultCoins(currencyType));
  }, [currencyType]);

  useEffect(() => {
    getData();
  }, [portfolio]);

  const noDupps = portfolio?.reduce((acc: any, el: NewItem) => {
    if (acc[el.id]) return acc;
    return { ...acc, [el.id]: el };
  }, {});

  const getData = async () => {
    const pricedCoinsObject = await Promise.all(
      Object.keys(noDupps).map(async (key) => {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${key}`
        );
        const json = await data.json();
        return json;
      })
    );

    const newData = pricedCoinsObject.reduce((acc, el) => {
      el.current_price = el.market_data.current_price[currencyType];
      el.total_volume = el.market_data?.total_volume[currencyType];
      el.market_cap = el.market_data?.market_cap[currencyType];
      el.circulating_supply = el.market_data?.circulating_supply;
      el.price_change_percentage_24h =
        el.market_data?.price_change_percentage_24h;
      el.total_supply = el.market_data?.total_supply;
      return { ...acc, [el.id]: el };
    }, {});

    const newPortfolioData = await Promise.all(
      portfolio?.map(async (coin: NewItem) => {
        let currentDate = getCurrentDate();
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${currentDate}`
        );
        const json = await data.json();
        return {
          id: json.id,
          amount: noDupps[coin.id].amount,
          last_updated: newData[coin.id].last_updated,
          previousPrice: json.market_data?.current_price[currencyType],
          currentPrice: newData[coin.id].current_price,
          isBigger:
            json.market_data?.current_price[currencyType] >
            newData[coin.id].current_price,
          market_cap: newData[coin.id].market_cap,
          circulating_supply: newData[coin.id].circulating_supply,
          image: newData[coin.id].image,
          total_volume: newData[coin.id].total_volume,
          name: newData[coin.id].name,
          symbol: newData[coin.id].symbol,
          price_change_percentage_24h:
            newData[coin.id].price_change_percentage_24h,
          total_supply: newData[coin.id].total_supply,
        };
      })
    );
    setnewPortfolio(newPortfolioData);
    return newPortfolio;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    dispatch(handleSubmit(value));
    setValues((prev) => {
      return { ...prev, amount: 0, id: "" };
    });
    dispatch(togglePopup());
  };

  const fetchedData = !isLoading && portfolio;
  return (
    <PortfolioOuterContainer>
      <PortfolioInnerContainer>
        <AddAssetButton
          type="button"
          value="Add Asset"
          onClick={() => dispatch(togglePopup())}
        />
        {isOpen && (
          <Popup
            handleInputChange={handleInputChange}
            value={value}
            handleSubmitForm={handleSubmitForm}
          />
        )}
        <ContentOuterContainer>
          <StatisticsLabel>Statistics</StatisticsLabel>
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
          {fetchedData && (
            <ContentInnerContainer>
              {newPortfolio?.map((item: Item, index: number) => (
                <CoinItem key={index} {...item} />
              ))}
            </ContentInnerContainer>
          )}
        </ContentOuterContainer>
      </PortfolioInnerContainer>
    </PortfolioOuterContainer>
  );
};

export default Portfolio;
