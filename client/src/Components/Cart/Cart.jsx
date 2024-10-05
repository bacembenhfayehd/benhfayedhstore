import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const data = [
  
    {
      id:1,
      img:"https://images.pexels.com/photos/9558929/pexels-photo-9558929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/9558934/pexels-photo-9558934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Long sleeve Graphic T-shirt",
      desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      isNew:true,
      oldPrice:19,
      price:12
    },
  
  
  
    {
      id:2,
      img:"https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Coat",
      desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      isNew:true,
      oldPrice:19,
      price:12
    }

]

const Cart = () => {
  return (
    <div className='cart'>
    <h1>Products in your cart</h1>
    {data?.map((item)=> (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">1 x ${item.price}</div>

            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
    ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart