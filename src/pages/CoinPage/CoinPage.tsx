import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { RootState, AppDispatch } from "store/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "store/features/coinPageSlice/coinPageSlice";
import Summary from "components/Summary/index";
import Description from "components/Description/index";
import CurrencyConverter from "components/CurrencyConverter/index";
import Links from "components/Links/index";
import { RotatingLinesContainer } from "pages/CoinList/CoinList.styled";
import {
  CoinPageOuterContainer,
  CoinPageInnerContainer,
  SummaryLabel,
  LinksContainer,
} from "pages/CoinPage/CoinPage.styled";

const CoinPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { coinid } = useParams();
  const { coinData, isLoading } = useSelector(
    (state: RootState) => state.coinPage
  );

  useEffect(() => {
    dispatch(fetchData(coinid));
  }, [coinid]);

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
  };
  const fetchedData = !isLoading && coinData;
  return (
    <CoinPageOuterContainer isLoading={isLoading}>
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
        <CoinPageInnerContainer>
          <SummaryLabel>Summary</SummaryLabel>
          <Summary coinData={coinData} />
          <Description />
          <LinksContainer>
            {coinData?.links?.blockchain_site
              .slice(0, 3)
              .map((item: any, index: number) => (
                <Links key={index} link={item} handleCopy={handleCopy} />
              ))}
          </LinksContainer>
          <CurrencyConverter />
        </CoinPageInnerContainer>
      )}
    </CoinPageOuterContainer>
  );
};

export default CoinPage;
