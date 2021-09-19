import React from "react";
import "./About.css";
import { auth } from "../firebase";
import { useStatevalue } from "../context/StateProvider";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import {
  AccountBox,
  AccountCircleRounded,
  Book,
  MoneyOffOutlined,
} from "@material-ui/icons";

function Account() {
  const history = useHistory();
  const [{ user }, dispatch] = useStatevalue();
  const handleClick = () => {
    dispatch({
      type: "REMOVE_USER",
      user: null,
    });
    auth.signOut();
    history.push("/");
  };
  return (
    <div className="about_container">
      <h1>Account Details</h1>

      <div className="account_details">
        <AccountCircleRounded style={{ width: "100px", height: "100px" }} />
        <h1>{user?user:"Anoymous"}</h1>
        <button onClick={handleClick} id="signout">
          SignOut
        </button>
      </div>
      <div className="purchase_option">
        <div className="purchase_cards">
          <i>
            <MoneyOffOutlined />
          </i>
          <p>Purchase history</p>
        </div>
        <div className="purchase_cards">
          <Book />
          <p>Pickup & Delivery</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Account;
