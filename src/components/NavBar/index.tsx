import UpperNavbar from "components/UpperNavBar/index";
import { NavbarContainer, NavbarInnerContainer } from "components/NavBar/NavBar.styled";

const NavBar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <UpperNavbar />
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default NavBar;
