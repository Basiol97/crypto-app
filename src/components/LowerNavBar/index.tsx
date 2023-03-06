import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/index";
import { GoPrimitiveDot } from "react-icons/go";
import tableCoinPriceFormat from "utilities/tableCoinPriceFormat/index";
import { fetchLowerNavbarData } from "store/features/lowerNavbarSlice/lowerNavbar";
import {
  MarketCapVsVolumeOuterContainer,
  NavProgressContainer,
  LowerNavBar,
  NavBarProgress,
  IconContainer,
  NavMarketCapVsVolumeContainer,
  NavbarBottomItemsContainer,
  CoinsContainer,
  ExchangeContainer,
  NavbarMarketCapContainer,
} from "components/NavBar/NavBar.styled";

const LowerNavbar = () => {
  const { lowerNavbarData, isLoading } = useSelector(
    (state: RootState) => state.lowerNavbar
  );
  const defaultIcons = useSelector(
    (state: RootState) => state.portfolio.portfolio
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLowerNavbarData());
  }, []);

  const fetchedData = !isLoading && lowerNavbarData;
  const total_volume_btc = lowerNavbarData?.data?.total_volume?.btc;
  const total_market_cap_btc = lowerNavbarData?.data?.total_market_cap?.btc;
  const total_volume_eth = lowerNavbarData?.data?.total_volume?.eth;
  const total_market_cap_eth = lowerNavbarData?.data?.total_market_cap?.eth;

  return (
    <LowerNavBar>
      {fetchedData && (
        <NavbarBottomItemsContainer>
          <CoinsContainer>
            Coins: {lowerNavbarData?.data?.active_cryptocurrencies}
          </CoinsContainer>
          <ExchangeContainer>
            Exchange: {lowerNavbarData?.data?.markets}
          </ExchangeContainer>
          <NavbarMarketCapContainer>
            <GoPrimitiveDot />
            <div>
              {tableCoinPriceFormat(
                lowerNavbarData?.data?.total_market_cap?.usd
              )}
            </div>
          </NavbarMarketCapContainer>
          <NavbarMarketCapContainer>
            <GoPrimitiveDot />
            {tableCoinPriceFormat(lowerNavbarData?.data?.total_volume?.usd)}
          </NavbarMarketCapContainer>
          <MarketCapVsVolumeOuterContainer>
            <IconContainer>
              <img src={defaultIcons[0]?.image} alt="coin" />
            </IconContainer>
            <div>
              {lowerNavbarData?.data?.market_cap_percentage?.btc.toFixed(2)}%
            </div>
            <NavMarketCapVsVolumeContainer>
              <NavProgressContainer>
               {total_volume_btc && total_market_cap_btc && (<NavBarProgress
                  percent={
                    (total_volume_btc /
                      total_market_cap_btc) *
                    100
                  }
                />)}
              </NavProgressContainer>
            </NavMarketCapVsVolumeContainer>
          </MarketCapVsVolumeOuterContainer>
          <MarketCapVsVolumeOuterContainer>
            <IconContainer>
              <img src={defaultIcons[1]?.image} alt="coin" />
            </IconContainer>
            <div>
              {lowerNavbarData.data?.market_cap_percentage?.eth.toFixed(2)}%
            </div>
            <NavMarketCapVsVolumeContainer>
              <NavProgressContainer>
              {total_volume_eth && total_market_cap_eth && (<NavBarProgress
                  percent={
                    (total_volume_eth /
                      total_market_cap_eth) *
                    100
                  }
                />)}
              </NavProgressContainer>
            </NavMarketCapVsVolumeContainer>
          </MarketCapVsVolumeOuterContainer>
        </NavbarBottomItemsContainer>
      )}
    </LowerNavBar>
  );
};

export default LowerNavbar;
