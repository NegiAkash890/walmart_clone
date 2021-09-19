import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

function Row({title, fetchURL}) {
    const base_url = "https://api2.shop.com/AffiliatePublisherNetwork/v2" ;
    let access_token  = 'fe8569c09e094f08ac0fb7f47c21e44e';
    const [data, setData] = useState(null);
    useEffect(()=>{
            async function fetchCollections(){
            const result = await axios.get(`${base_url}${fetchURL}`, {
                headers: {
                  'api_key': `${access_token}`
                }})
                setData(result["data"].products);
            }
            fetchCollections();
    },[])
    return (
        <div className='category_container'>
            {(data !== []) ? (data?.map((item)=>{
                return(
                        <Product key ={item.id} displaypic={item.image.sizes[0].url} brand={item.brand} title={item.name} price={item.maximumPrice} rating={item.shortDescription}/>
                    )
            })):("Loading")}
        </div>
    )
}

export default Row
