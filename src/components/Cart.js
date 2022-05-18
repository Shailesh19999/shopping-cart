import React, { createContext, useEffect, useReducer } from 'react'
import "./cart.css"
import { products } from './products';
import ContextCart from './ContextCart'
import { reducer } from './reducer';
export const CartContext= createContext();
const initialState={
    item: products,
    totalAmount:0,
    totalItem:0,
}
function Cart() {
    const[state,dispatch]= useReducer(reducer,initialState);
    // to delete the indv element from  an items card
    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id,
        })

    }
    // clear the all item
    const clearCart=()=>{
        return dispatch({type:"CLEAR_CART"});

    };
    // incrmnt
    const increment=(id)=>{
        return dispatch({
            type: "INCREMENT",
            payload: id
        })
    }
    // decrmnt
    const decrement=(id)=>{
        return dispatch({
            type: "DECREMENT",
            payload: id
        })
    }


    // back to cart

    const back=()=>{
        return dispatch({type:"BACK_CART"});

    };

    // we will use useEffect hook to update the data
    useEffect(()=>{
        dispatch(
            {
                type: "GET_TOTAL"
            }
        )
        

    },[state.item]);

    return (
        <>
        <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement,back}}>
        <ContextCart/>

        </CartContext.Provider>
            
        </>
    )
}

export default Cart
