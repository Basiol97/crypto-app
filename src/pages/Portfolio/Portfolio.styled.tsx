import styled from "styled-components";

interface Porps {
  priceValue: number;
}

export const PortfolioOuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
`;

export const PortfolioInnerContainer = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 10px;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.fourthly};
  @media (max-width: ${({ theme }) => theme.tablets}) {
    margin-bottom: 100px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 150px;
  }
`;

export const AddAsset = styled.input`
  background-color: #06d554;
  width: 40%;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin: 50px 0;
`;

export const StatisticsLabel = styled.div`
  margin: 10px 0 25px 0;
  text-align: start;
  font-size: 20px;
  font-weight: bold;
`;

export const CoinsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 250px;
  background-color: ${({ theme }) => theme.fourthly};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px 0;
`;

export const ContentOuterContainer = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.main};
  margin: 0 auto 100px auto;
  width: 80%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 100%;
  }
`;

export const ContentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    margin-bottom: 100px 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 150px 0;
  }
`;

export const LeftOuterContainer = styled.div`
  width: 30%;
`;

export const LeftInnerContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  text-align: start;
  font-size: 0.9em;
`;

export const MarketPriceLabel = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 5px;
  }
`;

export const CoinLabel = styled.div`
  display: flex;
  justify-items: center;
  gap: 0 5px;
  font-size: 1.3em;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 5px;
  }
`;

export const PriceColorFormatter = styled.span<Porps>`
  color: ${(props) => (props.priceValue > 0 ? "#00fc2a" : "red")};
  font-size: 12px;
  font-weight: bold;
  margin-left: 3px;
`;

export const PriceContainer = styled.span`
  color: #00fc2a;
  font-size: 12px;
  font-weight: bold;
  margin-left: 3px;
`;

export const MarketPriceContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 5px;
  padding: 5px 0;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.fifthly};
    padding: 10px 5px;
    display: inline-flexbox;
    overflow-x: auto;
    /* Style the scrollbar background */
    ::-webkit-scrollbar {
      background: white;
      max-height: 5px;
      border-radius: 10px;
    }
    /* Style the scrollbar handle */
    ::-webkit-scrollbar-thumb {
      background: rgb(6, 213, 84);
      border-radius: 10px;
    }
  }
`;

export const YourCoinsContainer = styled.div`
  display: flex;
  padding: 5px 0;
  gap: 5px;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.tablets}) {
    font-size: 12px;
    display: block;
    padding: 5px;
    margin-right: 5px;
    background-color: ${({ theme }) => theme.fifthly};
  }
`;

export const AddAssetButton = styled.input`
  background-color: rgb(6, 213, 84);
  margin: 150px auto 40px auto;
  padding: 20px 60px;
  font-size: 17px;
  font-weight: bold;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  :hover {
    background-color: black;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
  }
`;

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: #00000090;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Box = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 45%;
  overflow: auto;
  background: #fff;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.fourthly};
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    width: 50%;
    max-height: 35%;
  }
  @media (max-width: ${({ theme }) => theme.tablets}) {
    width: 60%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    overflow: auto;
  }
`;

export const CloseIconContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const FormItemsContainer = styled.div`
  label {
    font-size: 0.8em;
  }
`;

export const InputField = styled.input`
  margin: 2%;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 15px;
  font-family: bold;
  border-radius: 10px;
  border: none;
`;

export const CloseIcon = styled.div`
  padding: 2px;
  position: absolute;
  top: 0;
  right: 0;
  content: "x";
  color: "#00fc2a";
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  margin: 5px auto 0 auto;
  color: white;
  padding: 7px 30px;
  border-radius: 10px;
  opacity: ${(props) => (props.disabled ? "0.2" : "0.8")};
  background-color: rgb(6, 213, 84);
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px 0;
  }
`;
