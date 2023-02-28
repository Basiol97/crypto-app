import {
  LeftContainer,
  NavbarLinkContainer,
  NavbarLinkitemContainer,
  NavbarLink,
} from "components/NavBar/NavBar.styled";

const LeftNavbar = () => {
  return (
    <LeftContainer>
      <NavbarLinkContainer>
        <NavbarLinkitemContainer>
          <NavbarLink to="/">Coin</NavbarLink>
        </NavbarLinkitemContainer>
        <NavbarLinkitemContainer>
          <NavbarLink to="/portfolio">Portfolio</NavbarLink>
        </NavbarLinkitemContainer>
      </NavbarLinkContainer>
    </LeftContainer>
  );
};

export default LeftNavbar;
