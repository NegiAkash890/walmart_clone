import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Facebook";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div className="footer">
      <div className="upper_footer">
        <div className="footer_search">
          <input type="search" placeholder="Enter email to subscribe to newsletter"  />
          <button>
            SignUp
          </button>
        </div>
        <div className="social_media">
          <a href="https://github.com/NegiAkash890/walmart_clone" >
            <FacebookIcon />
          </a>

          <a href="https://github.com/NegiAkash890/walmart_clone">
            <TwitterIcon />
          </a>

          <a href="https://github.com/NegiAkash890/walmart_clone">
            <PinterestIcon />
          </a>

          <a href="https://github.com/NegiAkash890/walmart_clone">
            <YouTubeIcon />
          </a>

          <a href="https://github.com/NegiAkash890/walmart_clone">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="explore">
        <div className="explore_items">
          <p>Get to Know Us</p>
          <a href="#" title='Walmart Icon'>Walmart+</a>
          <a href="#" title='Groceries'>Grocery Picket & Delivery</a>
          <a href="#" title='Money Center'>Money Center</a>
          <a href="#" title='Walmart Pay'>Walmart Pay</a>
        </div>
        <div className="explore_items">
          <p>Walmart.com</p>
          <a href="#">Our Company</a>
          <a href="#">Store Directory</a>
          <a href="#">Digital Museum</a>
          <a href="#">Our Suppliers</a>
        </div>
        <div className="explore_items">
          <p>Customer Service</p>
          <a href="#">Help Center</a>
          <a href="#">Returns</a>
          <a href="#">Contact Us</a>
          <a href="#">Store Pickup</a>
        </div>
        <div className="explore_items">
          <p>In The Spotlight</p>
          <a href="#">PS4</a>
          <a href="#">Trampoline</a>
          <a href="#">Skateboard</a>
          <a href="#">Outdoor Furniture</a>
        </div>
      </div>
      <div className="copyright">
        <small>© 2021 Walmart Clone. All Rights Reserved.</small>
        <small>
           @Akash Negi
        </small>
      </div>
    </div>
  );
}

export default Footer;
