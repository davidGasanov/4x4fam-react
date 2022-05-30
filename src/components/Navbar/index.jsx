import { Nav, Logo, NavLinks, NavLink, NavContainer } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Nav>
          <Logo>4x4 Family</Logo>
          <NavLinks>
            <NavLink to="/">Page 1</NavLink>
            <NavLink to="/">Page 2 </NavLink>
            <NavLink to="/">Page 3</NavLink>
            <NavLink to="/">Page 4</NavLink>
          </NavLinks>
        </Nav>
      </NavContainer>
    </>
  );
};

export default Navbar;
