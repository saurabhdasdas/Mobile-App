import React, { useContext, useState } from 'react'
import CartContext from '../CONTEXT/CartContext'

const Cart = (props) => {
  let ctx=useContext(CartContext)
  console.log(ctx.cartItem)
  
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {ctx.cartItem.map((ele, i)=>{
        return <tr>
        <th scope="row">{i+1}</th>
        <td><img style={{height:'100px',width:'100px'}} src={ele.thumbnail} alt="" /></td>
        <td>{ele.title}</td>
        <td>{ele.price}</td>
        <td><button className='btn btn-success'>+</button>{ele.quantity}
        <button className='btn btn-danger'>-</button></td>
        <td><button className='btn btn-danger'>Delete items</button></td>
      </tr>
       })}
    </tbody>
  </table>
    
    

    </div>
  )
}

export default Cart
