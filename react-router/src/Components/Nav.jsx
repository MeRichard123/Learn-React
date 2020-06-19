import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background: rgb(73, 79, 82);
  color: white;
  z-index: 9999;
`;
const NavItems = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
const NavLink = styled.li`
  cursor: pointer;
  text-decoration: none !important;
  color: white;
  :hover {
    transform: scale(0.9);
  }
`;

class Nav extends Component {
  render() {
    const navStyle = {
      color: "white",
      textDecoration: "none",
    };
    return (
      // Navigation and Navlink and NavItems are my styled components
      // The link is react routers form of anchor tag
      <Navigation>
        <h3>Logo</h3>
        <NavItems>
          <Link to="/" style={navStyle}>
            <NavLink>Home</NavLink>
          </Link>
          <Link to="/shop" style={navStyle}>
            <NavLink>Shop</NavLink>
          </Link>
          <Link to="/about" style={navStyle}>
            <NavLink>About</NavLink>
          </Link>
        </NavItems>
      </Navigation>
    );
  }
}

export default Nav;
