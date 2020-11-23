import React from 'react'
import AppLink from './AppLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <AppLink href="/" label="Next.js"></AppLink>
      <nav>
        <AppLink href="/about" label="about" />
        <AppLink href="/contact" label="contact" />
      </nav>
    </header>
  )
}

export default Header
