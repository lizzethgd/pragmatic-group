import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #10131a;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    height: 3px;
    transition: all 0.3s ease-in;
    background: #1976d2;
  }

  :hover {
    color: #10131a;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/404">Services</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/">Portfolio</NavLink>
      <NavLink to="/404">Code of conduct</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  )
}

export default NavLinks
