import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  percent?: number;
  showMobileSearchBar?: boolean;
  showSearchBar?: boolean;
}

export const NavbarContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  position: absolute;
  z-index: 99;
  left: 0;
  right: 0;
`;

export const NavbarInnerContainer = styled.div`
  margin: 0 auto;
`;

export const UpperNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.fifthly};
  -webkit-box-shadow: 0px -19px 59px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px -19px 59px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px -19px 59px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: ${({ theme }) => theme.tablets}) {
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: ${({ theme }) => theme.tabletsxl}) {
    padding: 15px 5px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  width: 30em;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const NavbarLinkitemContainer = styled.div``;

export const NavbarLink = styled(Link)`
  background-color: ${({ theme }) => theme.fourthly};
  padding: 13px 25px;
  text-decoration: none;
  color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-out;
  &:hover {
    color: #00fc2a;
    transform: scale(2);
  }
`;

export const NavbarItemsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: stretch;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    justify-content: end;
    gap: 7px;
  }
`;

export const SearchBarContainer = styled.div<Props>`
  display: flex;
  margin: auto 0;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    display: ${(props) => (props.showSearchBar ? "block" : "none")};
  }
`;

export const SearchField = styled.input<Props>`
  border-radius: 10px;
  border: none;
  padding: 12px 80px 12px 10px;
  background-color: ${({ theme }) => theme.fourthly};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: ${(props) => (props.showSearchBar ? "0" : "10px 3px")};
    border: ${(props) =>
      props.showSearchBar ? "0" : "0.1px lightgreen solid"};
  }
`;

export const CurrencyDropDownField = styled.select`
  width: 100%;
  padding: 0 5px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.fourthly};
  color: ${({ theme }) => theme.secondary};
  ::placeholder {
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.tablets}) {
    ::placeholder {
      text-align: center;
      font-size: 12px;
    }
  }
`;

export const OptionLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  font-weight: 200;
  text-decoration: none;
  &:hover {
    color: lightgreen;
    transform: scale(2);
  }
`;

export const Options = styled.div`
  position: absolute;
  z-index: 99;
  margin-top: 55px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.fourthly};
  color: ${({ theme }) => theme.thirdly};
  /* Style the scrollbar background */
  ::-webkit-scrollbar {
    background: white;
    max-height: 5px;
    max-width: 5px;
    border-radius: 10px;
  }
  /* Style the scrollbar handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(6, 213, 84);
    border-radius: 10px;
  }
  max-height: 320px;
  min-width: 270px;
  overflow-y: auto;
  text-align: center;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
`;

export const CurrancySearchField = styled.input`
  padding: 10px 0;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.fourthly};
  color: ${({ theme }) => theme.thirdly};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
`;

export const CurrancyContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.fourthly};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.fourthly};
  //border: 0.5px solid ${({ theme }) => theme.thirdly};
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const LowerNavBar = styled.div`
  min-height: 30px;
  max-width: 650px;
  width: 65%;
  margin: 0 auto;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.fifthly};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -webkit-box-shadow: 0px 25px 59px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 25px 59px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 25px 59px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.tablets}) {
    width: 70%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 75%;
  }
`;

export const NavbarBottomItemsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  justify-content: space-evenly;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const NavbarMarketCapContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: ${({ theme }) => theme.tablets}) {
    display: none;
  }
`;

export const MarketCapVsVolumeOuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5px;
`;

export const IconContainer = styled.div`
  img {
    width: 15px;
    height: 15px;
  }
`;

export const NavMarketCapVsVolumeContainer = styled.div`
  display: flex;
`;

export const NavProgressContainer = styled.div`
  height: 8px;
  min-width: 55px;
  max-width: 55px;
  background-color: #ffffff;
  position: relative;
  border-radius: 10px;
  margin: auto 0;
  overflow: hidden;
  border: none;
  margin-right: auto;
`;

const BaseBox = styled.div`
  height: 100px;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  border: none;
`;

export const NavBarProgress = styled(BaseBox)<Props>`
  background-color: #2172e5;
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent! < 2 ? "2" : percent)}%;
`;

export const NavBarOverView = styled.h2<Props>`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${(props) => (props.showSearchBar ? " none" : "block")};
  }
`;

export const CoinsContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.tablets}) {
    font-size: 9px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const ExchangeContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.tablets}) {
    font-size: 9px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const SearchFieldInnerContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 4px;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
`;

export const SearchFieldOuterContainer = styled.div`
  position: relative;
`;
