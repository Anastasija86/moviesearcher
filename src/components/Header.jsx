import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchBar from "components/SearchBar";
import { pathBoard } from "path";

import logo from "assets/headerIcons/logo.svg";
import cart from "assets/headerIcons/cart.svg";
import MainMenu from "components/MainMenu";

const Wrapper = styled.div`
  font-family: "Lexend", sans-serif;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 7.75rem;
  width: 100%;
`;
const OfferContainer = styled.div`
  background-color: rgba(5, 66, 44, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 1.8 rem;
  width: 100%;
`;
const OfferText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-size: 0.7rem;
  width: 100%;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
`;
const MiddleLayer = styled.div`
  height: 1.9rem;
  padding: 14px 64px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  vertical-align: middle;
`;
const Logo = styled.img`
  width: 8rem;
  cursor: pointer;
`;
const AccountWrapper = styled.div`
  text-align: center;
  align-items: center;
  min-width: 9rem;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  font-size: 14px;
  font-weight: 400;
  color: rgba(70, 73, 79, 1);
  cursor: pointer;
`;

const CartContainer = styled.div`
  position: absolute;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  top: 0.5rem;
  cursor: pointer;
`;
const CartImg = styled.img`
  cursor: pointer;
`;
const PurchaseAmmount = styled.div`
  position: absolute;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(235, 38, 6, 1);
  color: rgba(255, 255, 255, 1);
  bottom: -9px;
  right: -5px;
  font-size: 10px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Wrapper>
      <OfferContainer>
        <OfferText>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</OfferText>
      </OfferContainer>
      <MiddleLayer>
        <Link to={pathBoard.home}>
          <Logo src={logo} alt="Logo" />
        </Link>
        <SearchBar />
        <AccountWrapper>
          Your account
          <CartContainer>
            <Link to={pathBoard.cart}>
              <CartImg src={cart} alt="Cart" />
            </Link>
          </CartContainer>
          <PurchaseAmmount>0</PurchaseAmmount>
        </AccountWrapper>
      </MiddleLayer>
      <MainMenu />
    </Wrapper>
  );
}
