import React, { useState } from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import Logo from './Logo'

const NavContainer = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  opacity: 1;
  box-shadow: 0px 3px 10px #00000033;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const LinksContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`

const Hamburger = styled.div`
  background-color: #333333;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #333333;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`
const Navbar = () => {
  const [isOpen, setNavOpen] = useState(false)

  return (
    <NavContainer>
      <Logo />
      <Toggle isOpen={isOpen} onClick={() => setNavOpen(!isOpen)}>
        {isOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {isOpen ? (
        <LinksContainer>
          <NavLinks />
        </LinksContainer>
      ) : (
        <LinksContainer open>
          <NavLinks />
        </LinksContainer>
      )}
    </NavContainer>
  )
}

export default Navbar
