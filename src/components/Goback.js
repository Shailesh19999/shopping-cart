import React from 'react'
import { CartContext } from './Cart'
import { useContext } from "react";


function Goback() {
    const { back}= useContext(CartContext)
    
  return (
    <>
    
          <header>
                 <div className='continue-shopping'>
                     <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                     <h3>continue shopping</h3>

                 </div>
                 <div className='cart-icon'>
                     <img src="./images/cart.png" alt="cart" />
                     <p>0</p>
                 </div>
             </header>
             <section className='main-cart-section'>
                 <h1>shopping cart</h1>
                 <p className='total-items'>you have <span className='total-items-count'>0</span> items in shopping cart</p>
                 </section>
                 <h1>Your cart is empty..</h1>
                 <button className='back' onClick={back}>Back to cart</button>
                
        
    </>
  )
}

export default Goback
