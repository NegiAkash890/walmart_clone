import React from 'react'
import Card from '../components/Card'
import { useStatevalue } from '../context/StateProvider'
import './Home.css'

function Home() {
    const [{user}] = useStatevalue()
    return (
        <div className='home'>
            <h1>{user} , Welcome</h1>
            <h3>New! Free shipping with no order min. Restrictions apply.</h3>
            <Card/>
        </div>
    )
}

export default Home
