import React from 'react'
import './Card.css'
function Card() {
    return (
        <div className='card_container'>
           <h3>Pickup or delivery</h3>  
           <div className='card_body'>
             <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-3170/k2-_7c012544-6e3d-4e4d-a9d7-148bd7eae274.v1.jpg?odnWidth=320&odnHeight=140&odnBg=ffffff'/>
             <p>Groceries & even more</p>
             <em>1919 Davis St , San Leandro</em>
           </div>
           <button>Place Order</button>
        </div>
    )
}

export default Card
