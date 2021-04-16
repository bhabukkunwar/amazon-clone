import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";

function Header() {
  const [{basket}] = useStateValue();
  return (
    <nav className="header className="header__option__line2>
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
          <span className="header__option__line1">Hello</span>
          <span className="header__option__line2" >Sign,in</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
          <span className="header__option__line1">Return</span>
          <span className="header__option__line2">& Orders</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
          <span className="header__option__line1">Your</span>
          <span className="header__option__line2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
  <span className="header__option__line2 header__basketCount">{basket.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  );
}

export default Header;
