import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';



function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className='wrapper'> 
      <div className="left">
        <div className='item'>
          <img src="/img/en.png" alt=""  />
          <ExpandMoreIcon/>
        </div>
        <div className='item'>
          <ExpandMoreIcon/>
          <span>Used</span>
        </div>
        <div className='item'>
          <Link className='link' to='/products/1'>Women</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/products/2'>Men</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/products/3'>Accessories</Link>
        </div>
      </div>
      <div className="center">
        <Link className='link' to='/'>BENHFAYDH</Link>
      </div>
      <div className="right">
      <div className="item">
        <Link className='link' to='/'>Homepage</Link>
      </div>
      <div className="item">
        <Link className='link' to='/'>About</Link>
      </div>
      <div className="item">
        <Link className='link' to='/'>Contact</Link>
      </div>
      <div className="item">
        <Link className='link' to='/'>Stores</Link>
      </div>
      <div className="icons">
        <SearchIcon/>
        <PersonIcon/>
        <div className="cartIcons" onClick={()=>setOpen(!open)}>
          <AddShoppingCartIcon/>
          <span>0</span>
        </div>
        
      </div>
      </div>

      </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar