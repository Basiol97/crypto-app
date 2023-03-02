import { useSelector } from "react-redux";
import formatPrice from "utilities/formatPrice";
import handlecurrencySymbol from "utilities/handlecurrencySymbol/index";
import { RootState } from "store/index";
import formatDate from "utilities/formatDate";
import tableCoinPriceFormat from "utilities/tableCoinPriceFormat";
import { FcAbout } from "react-icons/fc";
import { BsLink45Deg } from "react-icons/bs";
import { BiCaretUp, BiCaretDown, BiLayer } from "react-icons/bi";
import {
  SummaryInfoContainer,
  CoinContainer,
  CoinPricesOuterContainer,
  CoinGeneralInfosContainer,
  CoinImage,
  TopContainer,
  BottomContainer,
  PriceInnerContainer,
  PriceOuterContainer,
  AllTimeHighContainer,
  AllTimeLowContainer,
  MarketCapContainer,
  FullyDilutedContainer,
  VolumeContainer,
  VolumeMarketContainer,
  TotalVolumeContainer,
  CirculatingSupplyContainer,
  MaxSupplyContainer,
  TimesContainer,
  CurrentPrice,
  AllTimeHighPrice,
  CoinName,
  PricePercentage,
  CoinPricesInnerContainer,
  Profit,
  ProfitContainer,
  IconContainer,
  SummaryLink,
  LinkItem,
  ProgressBarContainer,
  ProgressBarContainerTopContainer,
} from "pages/CoinPage/CoinPage.styled";
import {
  Container,
  Progress,
  LeftItem,
  RightItem,
  LeftPrice,
  RightPrice,
  RightCircle,
  LeftCircle,
} from "pages/CoinList/CoinList.styled";

const Summary = () => {
  const currencyType: string = useSelector(
    (state: RootState) => state.currencyType.currencyType
  );
  const { coinData } = useSelector((state: RootState) => state.coinPage);

  interface CurrencyType {
    usd: number;
    gbp: number;
    eur: number;
  }

  interface CurrencyType2 {
    usd: string;
    gbp: string;
    eur: string;
  }

  const colors = [
    "#FFB528",
    "#474C77",
    "#FE7D43",
    "#B3404A",
    "#74D0B4",
    "#2775C9",
  ];

  const colorIndex = Math.floor(Math.random() * (colors.length - 0) + 0);
  const backgroundColor = colors[colorIndex];
  return (
    <SummaryInfoContainer>
      <CoinContainer>
        <TopContainer>
          <CoinImage src={coinData.image?.small} />
          <CoinName>
            {coinData.name} <span>({coinData.symbol})</span>
          </CoinName>
        </TopContainer>
        <BottomContainer>
          <LinkItem target="_blank" href={coinData.links?.homepage}>
            <BsLink45Deg size={15} />
          </LinkItem>
          <SummaryLink>{coinData.links?.homepage}</SummaryLink>
        </BottomContainer>
      </CoinContainer>
      <CoinPricesOuterContainer>
        <CoinPricesInnerContainer>
          <PriceOuterContainer>
            <PriceInnerContainer>
              <CurrentPrice>
                {handlecurrencySymbol(currencyType)}
                {formatPrice(
                  coinData.market_data?.current_price[
                    currencyType as keyof CurrencyType
                  ]
                )}
              </CurrentPrice>
              <PricePercentage>
                {(
                  coinData.market_data!.ath[
                    currencyType as keyof CurrencyType
                  ] /
                  coinData.market_data!.atl[currencyType as keyof CurrencyType]
                ).toFixed(2)}
                %
              </PricePercentage>
            </PriceInnerContainer>
            <ProfitContainer>
              Profit:{" "}
              <Profit>
                {handlecurrencySymbol(currencyType)}
                {formatPrice(
                  coinData.market_data!.ath[
                    currencyType as keyof CurrencyType
                  ] -
                    coinData.market_data!.atl[
                      currencyType as keyof CurrencyType
                    ]
                )}
              </Profit>
            </ProfitContainer>
            <IconContainer>
              <BiLayer size={30} />
            </IconContainer>
          </PriceOuterContainer>
          <TimesContainer>
            <AllTimeHighContainer>
              <div>
                <BiCaretUp color="#00FC2A" />
              </div>
              <div>
                <div>
                  All Time High:{" "}
                  <AllTimeHighPrice color="#00FC2A">
                    {handlecurrencySymbol(currencyType)}
                    {formatPrice(
                      coinData.market_data?.ath[
                        currencyType as keyof CurrencyType
                      ]
                    )}
                  </AllTimeHighPrice>
                </div>
                <div>
                  {formatDate(
                    coinData.market_data!.atl_date[
                      currencyType as keyof CurrencyType2
                    ]
                  )}
                </div>
              </div>
            </AllTimeHighContainer>
            <AllTimeLowContainer>
              <span>
                <BiCaretDown color="red" />
              </span>
              <div>
                <div>
                  All Time Low:{" "}
                  <AllTimeHighPrice color="red">
                    {handlecurrencySymbol(currencyType)}
                    {formatPrice(
                      coinData.market_data?.atl[
                        currencyType as keyof CurrencyType
                      ]
                    )}
                  </AllTimeHighPrice>
                </div>
                <div>
                  {formatDate(
                    coinData.market_data!.ath_date[
                      currencyType as keyof CurrencyType2
                    ]
                  )}
                </div>
              </div>
            </AllTimeLowContainer>
          </TimesContainer>
        </CoinPricesInnerContainer>
      </CoinPricesOuterContainer>
      <CoinGeneralInfosContainer>
        <MarketCapContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Market Cap:
            <span>
              {handlecurrencySymbol(currencyType)}
              {formatPrice(
                coinData.market_data?.market_cap[
                  currencyType as keyof CurrencyType
                ]
              )}
            </span>
          </div>
        </MarketCapContainer>
        <FullyDilutedContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Fully Diluted Valuation:
            <span>
              {handlecurrencySymbol(currencyType)}
              {formatPrice(
                coinData.market_data?.fully_diluted_valuation[
                  currencyType as keyof CurrencyType
                ]
              )}
            </span>
          </div>
        </FullyDilutedContainer>
        <VolumeContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Volume 24h:
            <span>
              {" "}
              {handlecurrencySymbol(currencyType)}
              {formatPrice(
                coinData.market_data?.high_24h[
                  currencyType as keyof CurrencyType
                ]
              )}
            </span>
          </div>
        </VolumeContainer>
        <VolumeMarketContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Vol/Mar:
            <span>
              {handlecurrencySymbol(currencyType)}
              {formatPrice(
                coinData.market_data!.total_volume[
                  currencyType as keyof CurrencyType
                ] /
                  coinData.market_data!.market_cap[
                    currencyType as keyof CurrencyType
                  ]
              )}
            </span>
          </div>
        </VolumeMarketContainer>
        <TotalVolumeContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Totoal Volume:
            <span>
              {formatPrice(
                coinData.market_data?.total_volume[
                  currencyType as keyof CurrencyType
                ]
              )}{" "}
              BTC
            </span>
          </div>
        </TotalVolumeContainer>
        <CirculatingSupplyContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Circulating Supply:
            <span>
              {formatPrice(coinData.market_data?.circulating_supply)} BTC
            </span>
          </div>
        </CirculatingSupplyContainer>
        <MaxSupplyContainer>
          <div>
            <FcAbout size={25} />
          </div>
          <div>
            Max Supply:
            <span> {formatPrice(coinData.market_data?.max_supply)} BTC</span>
          </div>
        </MaxSupplyContainer>
        <ProgressBarContainer>
          <ProgressBarContainerTopContainer>
            <LeftItem>
              <LeftCircle backGroundcolor={backgroundColor} />
              <LeftPrice color={backgroundColor}>
                {tableCoinPriceFormat(1)}%
              </LeftPrice>
            </LeftItem>
            <RightItem>
              <RightCircle backGroundcolor={backgroundColor} />
              <RightPrice color={backgroundColor}>
                {tableCoinPriceFormat(100)}%
              </RightPrice>
            </RightItem>
          </ProgressBarContainerTopContainer>
          <Container backGroundcolor={backgroundColor} width={100}>
            <Progress
              background={backgroundColor}
              percent={
                (Number(coinData.market_data?.circulating_supply) /
                  Number(coinData.market_data?.max_supply)) *
                100
              }
            />
          </Container>
        </ProgressBarContainer>
      </CoinGeneralInfosContainer>
    </SummaryInfoContainer>
  );
};

export default Summary;
