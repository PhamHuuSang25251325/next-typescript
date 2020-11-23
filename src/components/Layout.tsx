import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import nancy from '../../images/nancy.jpg'
import Navbar from './Navbar'
interface LayoutProps {
  pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Navbar />
        <img src={nancy} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
