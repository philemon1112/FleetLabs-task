import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children, cartProductQuantity, setCartProductQuantity, cart, setCart}) {
  return (
    <>
        <Header cartProductQuantity={cartProductQuantity} setCartProductQuantity={setCartProductQuantity} cart={cart} setCart={setCart} />
        {children}
        <Footer />
    </>
  )
}

export default Layout