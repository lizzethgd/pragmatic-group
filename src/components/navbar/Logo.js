import React from 'react'
import styled from 'styled-components'
import logo from './pragmatic-logo.png'
import { Link } from 'gatsby'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 160px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const LogoImage = styled.img`
  width: 163px;
  height: 41px;
  margin-top: 10px;
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <LogoImage src={logo} alt="logo" />
    </LogoWrap>
  )
}

export default Logo
