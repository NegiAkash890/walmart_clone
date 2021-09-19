import React, { useEffect, useState } from 'react'

function Slider() {
    const [index, setIndex] = useState(0) ;
    const data = [
        { 
            img : '/img1.jpg' ,
            heading:'',
            subheading:''

        } ,
        {  img : '/img2.jpg' ,
           heading:'',
           subheading:''
        } ,
        { 
            img : '/img3.jpg' ,
            heading:'',
            subheading:''
        }
    ]
    useEffect(() => {
      setTimeout(()=>{
            if( index === data.length - 1){
                setIndex(0);
            }
            else{
                setIndex(index + 1);
            }
      },8000)

    }, [index])
    return (
        <div>
               <div className='main_poster_container'>
                <div className='left_poster_section'>
                    <h1>New from </h1>
                    <p>Fashion to mix ,layer, & assemble freely</p>
                    <button className='btn btn-light'>Shop Now</button>
                </div>
                <div className='right_poster_section'>
                <img id='main_poster' src={`${process.env.PUBLIC_URL}/assests/${data[index].img}` } alt='main_banner'/> 
                </div>
            </div>
        </div>
    )
}

export default Slider
