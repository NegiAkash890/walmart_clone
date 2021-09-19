import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Category.css'

function Category() {
    const [collection, setCollection] = useState([]) ;
    let access_token  = 'fe8569c09e094f08ac0fb7f47c21e44e'
    useEffect(()=>{
        axios.get('https://api2.shop.com/AffiliatePublisherNetwork/v2/categories?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&onlyMaProducts=true', {
            headers: {
              'api_key': `${access_token}`
            }}).then( res => {setCollection(res.data.categories)}) 
    } ,[])
    return (
        <ul className='category_card'>
           { 
                collection.map((item)=>
                <li className='collection_card' key={item.id}>
                   { item.name }
                </li>)
                
           }
        </ul>
    )
}

export default Category
