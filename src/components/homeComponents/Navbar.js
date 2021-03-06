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
  const [user, setUser] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  const googleAuthLink = "http://localhost:5000/auth/logout";
  const userRoute = "http://localhost:5000/postauth";

  useEffect(() => {
    async function fetchUser() {
      try {
        await fetch(userRoute, { credentials: "include" })
          .then(res => res.json())
          .then(res => {
            let first =
              res.username.indexOf(" ") === -1
                ? res.username
                : res.username.substr(0, res.username.indexOf(" "));
            setUser(first);
          });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
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
          <NavItem className="navbar-brand text-white">
            {user !== null || undefined ? `Welcome, ${user}` : `Loading...`}
          </NavItem>
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
