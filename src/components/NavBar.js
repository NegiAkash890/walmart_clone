import React from "react";
import "./NavBar.css";
import {
  
  
  Link
} from "react-router-dom";
import { useStatevalue } from "../context/StateProvider";
function NavBar() {
  const [{user}] = useStatevalue()
  const [{cart}] = useStatevalue()
  
  return (
    <nav className="nav_bar">
      <div className="main_logo">
        <h3><Link to='/home' className='link'>Walmart</Link></h3>
        <img src={process.env.PUBLIC_URL + '/walmart.png'}/>
      </div>
      <div id="search">
        <input type="search" placeholder="search" id="top_search_bar" />
        <button><img src='//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/search-nav-black.b92f68559cf70c3bcfb9eae1d8dcca59ca58af11.svg'/></button>
      </div>
      <div className="nav_bar_links">
        <ul>
          <li>
            <Link to="/account" className='link'>Account</Link>
            <img src='//i5.walmartimages.com/dfw/63fd9f59-e6fd/58bc58d4-79e6-4302-b5f4-9d7f0eef1508/v1/user-nav-white.487755544c4763ca6d9aa9c165e93fe6aba79542.svg'/>
          </li>
          <li>
              <Link to="/cart" className='link'>Cart<span id='total_items'>{cart.length}</span></Link>
              <img src='//i5.walmartimages.com/dfw/63fd9f59-392b/48a699e6-5299-4b55-8895-28b7af730df3/v1/cart-nav-white.00018279d92b8685ff0d50c146eefe5491200c0b.svg'/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
