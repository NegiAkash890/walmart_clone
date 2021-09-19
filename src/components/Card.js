import React from 'react'
import './Card.css'
function Card({heading , pic , summary,subtext , btntxt}) {
    return (
        <div className='card_container'>
           <h2>{heading}</h2>  
           <div className='card_body'>
             <img src={pic} alt='product_image'/>
             <p>{summary}</p>
             <small>{subtext}</small>
           </div>
           <button style={{display:`${btntxt}`}} className='card_btn'>{btntxt}</button>
        </div>
    )
}

export default Card
