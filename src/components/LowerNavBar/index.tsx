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

  return (
    <LowerNavBar>
      {fetchedData && (
        <NavbarBottomItemsContainer>
          <CoinsContainer>
            Coins: {lowerNavbarData?.data!.active_cryptocurrencies}
          </CoinsContainer>
          <ExchangeContainer>
            Exchange: {lowerNavbarData?.data!.markets}
          </ExchangeContainer>
          <NavbarMarketCapContainer>
            <GoPrimitiveDot />
            <div>
              {tableCoinPriceFormat(
                lowerNavbarData?.data!.total_market_cap.usd
              )}
            </div>
          </NavbarMarketCapContainer>
          <NavbarMarketCapContainer>
            <GoPrimitiveDot />
            {tableCoinPriceFormat(lowerNavbarData?.data!.total_volume.usd)}
          </NavbarMarketCapContainer>
          <MarketCapVsVolumeOuterContainer>
            <IconContainer>
              <img src={defaultIcons[0]?.image} />
            </IconContainer>
            <div>
              {lowerNavbarData?.data!.market_cap_percentage.btc.toFixed(2)}%
            </div>
            <NavMarketCapVsVolumeContainer>
              <NavProgressContainer>
                <NavBarProgress
                  percent={
                    (lowerNavbarData.data!.total_volume.btc /
                      lowerNavbarData.data!.total_market_cap.btc) *
                    100
                  }
                />
              </NavProgressContainer>
            </NavMarketCapVsVolumeContainer>
          </MarketCapVsVolumeOuterContainer>
          <MarketCapVsVolumeOuterContainer>
            <IconContainer>
              <img src={defaultIcons[1]?.image} />
            </IconContainer>
            <div>
              {lowerNavbarData.data?.market_cap_percentage.eth.toFixed(2)}%
            </div>
            <NavMarketCapVsVolumeContainer>
              <NavProgressContainer>
                <NavBarProgress
                  percent={
                    (lowerNavbarData.data!.total_volume.eth /
                      lowerNavbarData.data!.total_market_cap.eth) *
                    100
                  }
                />
              </NavProgressContainer>
            </NavMarketCapVsVolumeContainer>
          </MarketCapVsVolumeOuterContainer>
        </NavbarBottomItemsContainer>
      )}
    </LowerNavBar>
  );
};

export default LowerNavbar;
