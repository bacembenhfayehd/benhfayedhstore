import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg,SetSelectedImg] = useState(0)
  const [quantity, SetQauntity] = useState(1)


  const images = [ 

    "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5490232/pexels-photo-5490232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=""  onClick={e=>SetSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>SetSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$18.8</span>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
         as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
        <div className="quantity">
          <button onClick={()=>SetQauntity((prev) => prev === 1 ? 1: prev - 1)}>-</button>
          {quantity}
          <button onClick={()=>SetQauntity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
       <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt </span>
          <span>Tag: T-shirt Women Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>

    </div>
  )
}

export default Product