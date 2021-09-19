import React from 'react'
import './Product.css'
import uuid  from 'react-uuid'
import { useStatevalue } from '../context/StateProvider'
import { useAlert } from 'react-alert'
function Product({displaypic , brand , title , rating , price}) {
    const [{cart} , dispatch] = useStatevalue()
    const alert = useAlert()
    const handleClick = ()=>{
     
     dispatch({
         type:"ADD_ITEM",
         item : {
             id : uuid() ,
             title : title ,
             image : displaypic ,
             price : price ,
             brand : brand,
             rating : rating
         }
     })
      alert.success("Added to Cart")
    }
    return (
        <div className='product_container'>
            <div className='product_image'>
                <img src={displaypic} alt={title}/>
               
            </div>
            <div className='brand_info'>
                <h3>{brand}</h3>
                <p>{title}</p>
            </div>
            <div className='more_info'>
                <p className='price'>${price}</p>
                <button onClick={handleClick} title='Add to Cart'>+ Add</button>
            </div>
        </div>
    )
}

export default Product
