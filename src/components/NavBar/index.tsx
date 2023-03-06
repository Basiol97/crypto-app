import UpperNavbar from "components/UpperNavBar/index";
import { NavbarContainer, NavbarInnerContainer } from "components/NavBar/NavBar.styled";
import LowerNavbar from "components/LowerNavBar";

const NavBar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <UpperNavbar />
        <LowerNavbar />
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default NavBar;
