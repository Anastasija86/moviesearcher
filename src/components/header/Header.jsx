import React from "react";
import styled from '../header/Header.module.css';

import SearchBar from '../AppBar/searchBar/SearchBar';

import logo from '../assets/headerIcons/Logo.svg';
import cart from '../assets/headerIcons/cart.svg';


export default function Header() {
  return (
    <div className={styled.header}>
      <div className={styled.offerContainer}>
        <p className={styled.offerText}>
          LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
        </p>
      </div>
      <div className={styled.middleLayer}>
        <div className={styled.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <SearchBar />
        <div className={styled.accountContainer}>
          <p className={styled.accountText}>Your account</p>
          <span></span>
          <div className={styled.cartImgContainer}>
            <img className={styled.cartImg} src={cart} alt="Cart" />
          </div>
          <div className={styled.purchaseAmount}>0</div>
        </div>
      </div>
    </div>
  );
}
