import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const googleAuthLink = "http://localhost:5000/auth/google";
  return (
    <div>
      <Navbar className="navi" light expand="md">
        <NavbarBrand href="/">soundLoud</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavItem className="navItem">
            <NavLink href={googleAuthLink}>
              <Button className="button">Log Out</Button>
            </NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
