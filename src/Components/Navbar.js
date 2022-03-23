import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from './NavElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>
         Ashutosh Tripathi
        </Logo>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>

        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;