import React from 'react'
import AppLink from '../AppLink'
import { NavContainer, NavLogo, NavMenu, Nav, NavItem } from './NavbarElements'

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <AppLink href="/" label="Next.js" />
        </NavLogo>
        <NavMenu>
          <NavItem>
            <AppLink href="/about" label="About" />
          </NavItem>
          <NavItem>
            <AppLink href="/contact" label="Contact" />
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
