import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "store/index";
import { fetchUpperNavbarData } from "store/features/upperNavbarSlice/upperNavbar";
import RightNavbar from "components/RightNavbar/index";
import LeftNavbar from "components/LeftNavbar";
import { UpperNavBar, NavBarOverView } from "components/NavBar/NavBar.styled";

const UpperNavbar = () => {
  const showMobileSearchBar = useSelector((state: RootState) => state.mobileSearchBar.showSearchBar);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpperNavbarData());
  }, []);

  return (
    <UpperNavBar>
      <NavBarOverView showMobileSearchBar={showMobileSearchBar}>
        Overview
      </NavBarOverView>
      <LeftNavbar />
      <RightNavbar />
    </UpperNavBar>
  );
};

export default UpperNavbar;
