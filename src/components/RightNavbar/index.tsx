import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/index";
import { handleCurrencyChange } from "store/features/currencySlice/currencyTypeSlice";
import { handleMobileSearchClick } from "store/features/mobileSearchBarSlice/MobileSearchBar";
import { handleInputChange } from "store/features/upperNavbarSlice/upperNavbar";
import { ConvertMode } from "store/features/ThemeModeSlice/ThemeModeSlice";
import {
  AiFillDollarCircle,
  AiOutlinePoundCircle,
  AiOutlineEuroCircle,
} from "react-icons/ai";
import { BiAdjust } from "react-icons/bi";
import {
  RightContainer,
  NavbarItemsContainer,
  SearchBarContainer,
  SearchField,
  CurrancyContainer,
  ThemeContainer,
  SearchFieldOuterContainer,
  CurrencyDropDownField,
  Options,
  OptionLink,
} from "components/NavBar/NavBar.styled";

const RightNavbar = () => {
  const dropDownData = useSelector(
    (state: RootState) => state.upperNavbar.dropDownData
  );
  const searchInput = useSelector(
    (state: RootState) => state.upperNavbar.searchInput
  );
  const currencyType = useSelector(
    (state: RootState) => state.currencyType.currencyType
  );
  const showMobileSearchBar = useSelector(
    (state: RootState) => state.mobileSearchBar.showSearchBar
  );
  const currencyOptions = useSelector(
    (state: RootState) => state.currencyType.currencyOptions
  );
  const dispatch: AppDispatch = useDispatch();

  interface Item {
    id: string;
  }
  return (
    <RightContainer>
      <NavbarItemsContainer>
        <SearchBarContainer showMobileSearchBar={showMobileSearchBar}>
          <SearchFieldOuterContainer>
            <SearchField
              type="text"
              name="search"
              placeholder="serach..."
              onChange={(e) => dispatch(handleInputChange(e.target.value))}
              value={searchInput}
              autoComplete="off"
            />
          </SearchFieldOuterContainer>
          {searchInput && (
            <Options onClick={() => dispatch(handleMobileSearchClick())}>
              {dropDownData
                .filter((item: Item) => item.id.includes(searchInput))
                .map((item: Item) => (
                  <div key={item.id}>
                    <OptionLink
                      onClick={() => dispatch(handleInputChange(""))}
                      to={`/coinpage/${item.id}`}
                    >
                      {item.id}
                    </OptionLink>
                  </div>
                ))}{" "}
            </Options>
          )}
        </SearchBarContainer>
        <CurrancyContainer>
          {currencyType == "usd" ? (
            <AiFillDollarCircle color="#06D554" size={35} />
          ) : currencyType == "gbp" ? (
            <AiOutlinePoundCircle color="#06D554" size={35} />
          ) : currencyType == "eur" ? (
            <AiOutlineEuroCircle color="#06D554" size={40} />
          ) : (
            <AiFillDollarCircle color="#06D554" size={40} />
          )}
          <CurrencyDropDownField
            onChange={(e) =>
              dispatch(handleCurrencyChange(e.target.value.toLowerCase()))
            }
          >
            {currencyOptions.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </CurrencyDropDownField>
        </CurrancyContainer>
        <ThemeContainer onClick={() => dispatch(ConvertMode())}>
          {<BiAdjust size={28} />}
        </ThemeContainer>
      </NavbarItemsContainer>
    </RightContainer>
  );
};

export default RightNavbar;
