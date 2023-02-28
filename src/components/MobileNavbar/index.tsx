import React from "react";
import { useDispatch } from "react-redux";
import { handleMobileSearchClick } from "store/features/mobileSearchBarSlice/MobileSearchBar";
import { FiHome } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineOrderedList } from "react-icons/ai";
import {
  MobileNavbarOuterContainer,
  MobileNavbarInnerContainer,
  Search,
  Portfolio,
  Overview,
} from "components/MobileNavbar/styled";

const MobileNavbar = () => {
  const dispatch = useDispatch();
  return (
    <MobileNavbarOuterContainer>
      <MobileNavbarInnerContainer>
        <Overview to="/">
          {" "}
          <FiHome size={20} /> Overview
        </Overview>
        <Portfolio to="portfolio">
          <AiOutlineOrderedList size={20} /> Portfolio{" "}
        </Portfolio>
        <Search onClick={() => dispatch(handleMobileSearchClick)}>
          <RiSearchLine size={20} /> Search
        </Search>
      </MobileNavbarInnerContainer>
    </MobileNavbarOuterContainer>
  );
};

export default MobileNavbar;
