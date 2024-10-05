import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {


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
    <div className='list'>{data?.map(item => (
        
        <Card item={item} key={item.id}/>
    ))}
        
        
        </div>
  )
}

export default List