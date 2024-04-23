import React, { useState } from 'react'
import CartContext from './CartContext'
const CartState = (props) => {
    const [cartItem, setcartItem] = useState([]);
    const [Navsearch, setNavsearch] = useState("");
    const addtoCart=(ans)=>{
        console.log(ans)
        setcartItem([...cartItem,ans])
        console.log(cartItem)

    }
    const removeFromCart=()=>{

    }
    const updatetoCart=()=>{

    }
  return (
    <CartContext.Provider value={{cartItem,addtoCart,removeFromCart,updatetoCart,Navsearch,setNavsearch}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
