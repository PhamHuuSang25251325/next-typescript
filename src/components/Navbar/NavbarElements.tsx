import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: sticky;
  z-index: 10;
  top: 0;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 24px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  a {
    text-decoration: none;
    outline: none;
  }
`

export const NavMenu = styled.ul<{ isVisible?: boolean }>`
  display: flex;
  list-style: none;
  list-style-type: none;
  align-items: center;
  background: ${({ isVisible }) => (isVisible ? 'red' : 'green')};
`

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  a {
    padding: 0 1rem;
    text-decoration: none;
    outline: none;
  }
`
