import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileNavbarOuterContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.main};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

export const MobileNavbarInnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
`;


export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 100;
  border-radius: 10px;
  &:hover,
  onfocus {
    color: lightgreen;
  }
`;

export const Overview = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 100;
  border-radius: 10px;
  &:hover,
  onfocus {
    color: lightgreen;
  }
`;

export const Portfolio = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  padding: 5px;
  font-size: 14px;
  font-weight: 100;
  border-radius: 10px;
  &:hover,
  onfocus {
    color: lightgreen;
  }
`;
