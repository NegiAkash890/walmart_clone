import React, { useEffect, useRef } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'
import { useStatevalue } from '../context/StateProvider'
import { auth } from '../firebase'
import './Signin.css'



function Signin() {
    const history = useHistory()
    const alert = useAlert()
    const email = useRef(null)
    const password = useRef(null)
    const [{user} , dispatch] = useStatevalue()
    const handleSubmit = (e)=>{
        let Email = email.current.value;
        let Password = password.current.value
        e.preventDefault()
        auth.signInWithEmailAndPassword(Email,Password)
        .then((auth)=>{
            if(auth){
                dispatch({
                    type:"ADD_USER" ,
                    user : auth.user.email
                })
                history.push("/home")
                console.log(user)
            
            }
        })
        .catch((err)=>{
            alert.error(err.message)
        })
    
    }
    const createAccount = (e)=>{
        let Email = email.current.value;
        let Password = password.current.value
        e.preventDefault()
        auth.createUserWithEmailAndPassword(Email,Password)
        .then((auth)=>{
            if(auth){
                console.log(auth)
                history.push("/home")
            }
        })
        .catch((err)=>alert.error(err.message))
    }

    return (
        <div className='sigin_screen'>
           <form onSubmit={e=>handleSubmit(e)}>
             <div className='welcome_heading'>
                 <img src={process.env.PUBLIC_URL + '/walmart.png'} className='walmart_logo'/>
                 <h3>Sign in to your Walmart Account</h3>
             </div>
             <div className='user_info'>
                 <input type='email' ref={email}  placeholder='Email address (required)' required/>
                 <input type='password' ref={password} placeholder='Password (required)' required/>
             </div>
             <div className='forgot'>
                 <a href='#' style={{color:"grey",fontSize:"12px"}}>Forgot Password?</a>
             </div>
             <div id='check_rem'>
                 <input type='checkbox'/>
                 <span style={{color:"grey",fontSize:"14px",marginLeft:"5px"}}>Remember me</span>
             </div>
             <button type='submit' id='submit_button'>Sign in</button>
             <div className='sign_in_link'>
                 <h3>Don't have an account ?</h3>
                 <button id='new_account' type='submit' onClick={(e)=>createAccount(e)}>Create account </button>
             </div>
             <em id='note'>Note : Fill Details and Click Create Account Button</em>
           </form>
           <div></div>
            
        </div>
    )
}

export default Signin
