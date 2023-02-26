import styled from "styled-components";

interface Props {
  isLoading: boolean;
}

export const AllTimeHighPrice = styled.span`
  color: ${(props) => props.color};
`;
export const AllTimeHighContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 0;
  span {
    font-weight: 100;
  }
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    display: flex;
  }
`;
export const AllTimeLowContainer = styled.div`
  display: flex;
  font-size: 13px;
  justify-content: center;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
  span {
    font-weight: 100;
  }
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    width: 100%;
  }
`;

export const TimesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    flex-direction: row;
    padding-left: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.fourthly};
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
`;
export const CirculatingSupplyContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;

export const ReadMore = styled.span`
  color: #06d554;
`;
export const CoinContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  width: 20%;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
    margin: 20px 0;
  }
`;
export const CoinGeneralInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 0 10px 10px;
  font-size: 70%;
  background-color: ${({ theme }) => theme.fourthly};
  border-radius: 10px;
  display: flex;
  width: 35%;
  gap: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
    margin-bottom: 20px;
    padding: 15px 10px;
  }
`;
export const CoinImage = styled.img`
  background-color: ${({ theme }) => theme.main};
  padding: 10px;
  border-radius: 10px;
  width: 70px;
  height: 70px;
`;
export const CoinName = styled.div`
  margin-top: 0.5em;
  font-size: 20px;
`;
export const CoinPageInnerContainer = styled.div`
  margin-top: 150px;
  max-width: 1150px;
  background-color: ${({ theme }) => theme.fifthly};
  border-radius: 15px;
  padding: 50px;
  padding-bottom: 0;
  width: 80%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 10px;
  }
`;
export const CoinPageOuterContainer = styled.div<Props>`
  display: flex;
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  background-color: ${({ theme }) => theme.fourthly};
  font-family: "Poppins", sans-serif;
  height: ${(props) => (props.isLoading ? "100vh" : "")};
`;
export const CoinPricesInnerContainer = styled.div`
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const CoinPricesOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.fourthly};
  border-radius: 10px;
  width: 30%;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const CurrentPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const DescriptionLabel = styled.div`
  font-weight: bold;
  text-align: start;
  margin: 30px 0 30px 0;
  font-size: 20px;
`;
export const DescriptionInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.fourthly};
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
  }
`;
export const DescriptionOuterContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export const FooterBackgroundImage = styled.div`
  background-image: url("./assets/FooterImage.svg");
  width: 100%;
  height: 200px;
  margin-top: 100px;
`;
export const FullyDilutedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;
export const IconContainer = styled.div`
  margin: 10px 0;
`;
export const Link = styled.a``;

export const UrlContainer = styled.div`
  font-size: 65%;
  overflow: hidden;
`;
export const LinkItem = styled.a`
  color: ${({ theme }) => theme.secondary};
`;
export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.fourthly};
  border-radius: 10px;
  min-height: 40px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const LinksContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: stretch;
    width: 100%;
  }
`;
export const MarketCapContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;
export const MaxSupplyContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;
export const PriceContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
export const PriceInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  gap: 10px;
`;
export const PriceOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PricePercentage = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #00fc2a;
`;
export const Profit = styled.span`
  color: #00fc2a;
`;
export const ProfitContainer = styled.div`
  font-weight: bold;
  font-size: 13px;
`;
export const SummaryLabel = styled.div`
  padding: 0 10px;
  text-align: start;
  font-size: 20px;
  font-weight: bold;
`;
export const SummaryInfoContainer = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: stretch;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.fifthly};
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30% 0;
  align-items: center;
  background-color: ${({ theme }) => theme.fourthly};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    padding: 10% 0;
  }
`;
export const TotalVolumeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;
export const VolumeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;
export const VolumeMarketContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-weight: bold;
  span {
    font-weight: 100;
  }
`;
export const SummaryLink = styled.div`
  font-size: 10px;
  text-decoration: none;
`;
export const DescriptionIcon = styled.div`
  margin: 20px auto;
`;
export const CoinDescription = styled.div`
  font-size: 80%;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 20px;
  width: 95%;
  margin: 0 auto;
  .read-more-button {
    color: lightgreen;
  }
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    font-size: 1.5vw;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 3vw;
  }
`;
export const CopyIcon = styled.div`
  cursor: pointer;
  img {
    width: 15px;
  }
`;
export const CurrencyCoverterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 35px auto;
  width: 55%;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    flex-direction: column;
    width: 100%;
    gap: 10px 0;
    padding: 0 10px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 5px 0;
  }
`;
export const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  width: 45%;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
  }
`;
export const ExchangeIconContainer = styled.div`
  width: 10%;
  img {
    width: 30%;
  }
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 20%;
  }
`;
export const BtcContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
  }
`;
export const CurrencyType = styled.div`
  width: 20%;
  background-color: #06d554;
  padding: 10px;
  font-size: 75%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: black;
`;
export const Currency = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.fourthly};
  padding: 6px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    text-align: start;
  }
`;
export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;
export const ProgressBarContainerTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
`;
