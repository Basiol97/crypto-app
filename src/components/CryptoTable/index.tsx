import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/index";
import queryString from "query-string";
import { useSearchParams, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { RotatingLines } from "react-loader-spinner";
import { fetchData } from "store/features/cryptoTablelistSlice/cryptoTableList";
import Table from "components/Table/index";
import {
  CryptoTableOuterContainer,
  OverView,
  CryptoTableInnerContainer,
  SpinnerContainer,
} from "pages/CoinList/CoinList.styled";

const CryptoTable = () => {
  interface searchParam {
    marketcap: string[];
    volume: string[];
    name: string[];
  }

  const { search } = useLocation();
  const { sortBy, sortByAsc } = queryString.parse(search);
  const [queryParams, setQueryParams] = useSearchParams();
  const [CoinPage, setCoinPage] = useState(1);
  const currencyType = useSelector((state: RootState) => state.currencyType.currencyType);
  const { isLoading, coinsData } = useSelector((state: RootState) => state.coinList);
  const [filtredBySwitch, setFiltredBySwitch] = useState<boolean>(true);
  const [order, setOrder] = useState<string | null>("");
  const [searchParam, setsearchParam] = useState<searchParam>({
    marketcap: ["market_cap_asc", "market_cap_desc"],
    volume: ["volume_asc", "volume_desc"],
    name: ["id_asc", "id_desc"],
  });
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    if (order) {
      dispatch(fetchData({ currencyType, CoinPage, order }));
    }
  }, [order, CoinPage, currencyType]);

  useEffect(() => {
      dispatch(fetchData({ currencyType, CoinPage, order }));
  }, [CoinPage]);
  

  useEffect(() => {
    if (queryParams.get("sortBy") == null) {
      dispatch(fetchData({ currencyType, CoinPage, order }));
    } else if (queryParams.get("sortBy") != null) {
      setOrder(queryParams.get("sortBy"));
      if (order) {
        dispatch(fetchData({ currencyType, CoinPage, order }));
      }
    }
  }, []);

  useEffect(() => {
    setOrder(() => queryParams.get("sortBy"));
  }, [queryParams]);

  const handleUpdateQuery = (param: string) => {
    setFiltredBySwitch((prev) => !prev);
    setQueryParams({
      sortBy: `${
        filtredBySwitch
          ? searchParam[param as keyof searchParam][0]
          : searchParam[param as keyof searchParam][1]
      }`,
    });
  };

  const updateInitialCoins = () => {
    if (CoinPage < 4) {
      setCoinPage(CoinPage + 1);
    }
  };

  const fetchedData = !isLoading && coinsData;
  return (
    <InfiniteScroll
      dataLength={coinsData.length}
      next={updateInitialCoins}
      hasMore={true}
      loader={""}
    >
      <CryptoTableOuterContainer>
        <OverView>Overview</OverView>
        <CryptoTableInnerContainer>
          {isLoading && (
            <SpinnerContainer>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.5"
                width="60"
                visible={true}
              />
            </SpinnerContainer>
          )}
          {fetchedData && <Table handleUpdateQuery={handleUpdateQuery} />}
        </CryptoTableInnerContainer>
      </CryptoTableOuterContainer>
    </InfiniteScroll>
  );
};

export default CryptoTable;
