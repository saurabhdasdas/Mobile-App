import React, { useContext } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import CartContext from '../CONTEXT/CartContext';

const Navbar = () => {
  let navigate=useNavigate()
  let ctx=useContext(CartContext)
  console.log(ctx.cartItem.length)


  const handleLogi=()=>{
    navigate('/Login')
  }
  const handleSignup=()=>{
    navigator('/Signup')
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <form className="d-flex m-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button onClick={handleLogi}className='btn btn-primary m-2'>Login</button>
      <button onClick={handleSignup}className='btn btn-success'>Signup</button>


      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/usememo">Usememo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart "><CiShoppingCart size={'30px'} />{ctx.cartItem.length}</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
