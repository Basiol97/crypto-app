import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RootState } from 'store/index';
import { darkTheme, lightTheme } from "./my-theme";
import CoinList from "pages/CoinList";
import CoinPage from "pages/CoinPage";
import Portfolio from "pages/Portfolio";
const GlobalStyle = createGlobalStyle`
.App {
  text-align: center;
  background-color:${(props) => props.theme.main};
  color: ${(props) => props.theme.secondary};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}`;

  
const App:React.FC = () => {
const theme: any = useSelector((state: RootState) => state.theme.themeMode );

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<CoinList />} />
            <Route path="/coinpage/:coinid" element={<CoinPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
