import React, { useState, useEffect } from "react";
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
  const userRoute = "http://localhost:5000/postauth2/";

  useEffect(() => {
    async function rerouteCheck() {
      try {
        await fetch(userRoute, { credentials: "include" });
      } catch (err) {
        console.log(err);
      }
    }
    rerouteCheck();
  }, []);

  return (
    <div>
      <Navbar className="navi" light expand="md">
        <NavbarBrand href="/" className="title" style={{ color: "gold" }}>
          soundloud
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavItem className="navItem">
            <NavLink href={googleAuthLink}>
              <Button className="button">Sign In</Button>
            </NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
