import React from "react";
import "./Cart.css";
import { useStatevalue } from "../context/StateProvider";
import { useAlert } from "react-alert";
import { getBasketTotal } from "../context/reducer";


function Cart() {
  const [{ cart }, dispatch] = useStatevalue();
  const alert = useAlert();
  const handleClick = (e, id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
    alert.show("Removed from Cart");
  };
  return (
    <div className="cart_container">
      <div className="left_cart">
        <div>
          <div className="top_left_cart">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3170/k2-_7c012544-6e3d-4e4d-a9d7-148bd7eae274.v1.jpg?odnWidth=320&odnHeight=140&odnBg=ffffff" alt='credit-card'/>
            <p>Earn 5% backwith the Capital One Walmart Rewards Card.</p>
            <button>Reedem</button>
          </div>
        </div>
        <div className="bottom_left_cart">
          <h2>Your Cart : {cart.length} items</h2>

          {cart ? (
            cart.map((item) => {
              return (
                <div className="cart_item" key={item.id}>
                  <img src={item.image} alt={item.title}/>
                  <div className="cart_item_info">
                    <h3>Brand : {item.brand}</h3>
                    <p>{item.title}</p>
                    <div className="cart_item_price">
                      <p>Rs.{item.price}</p>
                      <a href="#" onClick={(e) => handleClick(e, item.id)} title='Remove' className='remove'>
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Cart is</p>
          )}
        </div>
      </div>
      <div className="right_cart">
        <div className="subtotal">
          <div>
            <p>Subtotal</p>
            <p>Rs. {getBasketTotal(cart)}</p>
          </div>
          <div>
            <p>Delivery</p>
            <p>Rs. 1</p>
          </div>
          <div>
            <p>Taxes and Fees</p>
            <p>Rs. 4</p>
          </div>
          <div className="est_total">
            <p>Est. total</p>
            <p>Rs. {cart.length ? getBasketTotal(cart) + 5 : 0}</p>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Cart;
