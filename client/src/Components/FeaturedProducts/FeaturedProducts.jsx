import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

const data = [
  
  {
    id:1,
    img:"https://images.pexels.com/photos/9558929/pexels-photo-9558929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2:"https://images.pexels.com/photos/9558934/pexels-photo-9558934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Long sleeve Graphic T-shirt",
    isNew:true,
    oldPrice:19,
    price:12
  },



  {
    id:2,
    img:"https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2:"https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Coat",
    isNew:true,
    oldPrice:19,
    price:12
  },


  {
    id:3,
    img:"https://images.pexels.com/photos/2388236/pexels-photo-2388236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Skirt",
    isNew:false,
    oldPrice:19,
    price:12
  },


  {
    id:4,
    img:"https://images.pexels.com/photos/1079783/pexels-photo-1079783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:"Hat",
    isNew:false,
    oldPrice:19,
    price:12
  }

]



  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
             by injected humour,or randomised words which don't look even slightly believable.
             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            </p>

        </div>
        <div className='bottom'>
            {data.map(item =>(

                <Card  item={item} key={item.id}/>

                
            ))}

        </div>

    </div>
  )
}

export default FeaturedProducts