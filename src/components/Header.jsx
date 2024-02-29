import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";

import logo from "../components/assets/headerIcons/Logo.svg";
import cart from "../components/assets/headerIcons/cart.svg";
import MainMenu from "./MainMenu";

const Wrapper = styled.div`
  font-family: "Lexend", sans-serif;
`;
const OfferContainer = styled.div`
  background-color: rgba(5, 66, 44, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 37px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const OfferText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-size: 14px;
  width: 100%;
`;
const MiddleLayer = styled.div`
  margin-top: 37px;
  height: 56px;
  padding: 14px 64px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  vertical-align: middle;
`;
const Logo = styled.img`
  width: 270px;
  cursor: pointer;
`;
const AccountWrapper = styled.div`
  text-align: center;
  min-width: 200px;
  height: 24px;
  display: flex;
  justify-content: center;
  position: relative;
`;
const AccountText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(70, 73, 79, 1);
  cursor: pointer;
`;
const CsrtContainer = styled.div`
  position: absolute;
  right: 0;
  width: 24px;
  height: 24px;
  top: 8px;
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
  bottom: -12px;
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
        <Logo src={logo} alt="Logo" />
        <SearchBar />
        <AccountWrapper>
          <AccountText>Your account</AccountText>
          <CsrtContainer>
            <CartImg src={cart} alt="Cart" />
          </CsrtContainer>
          <PurchaseAmmount>0</PurchaseAmmount>
        </AccountWrapper>
      </MiddleLayer>
      <MainMenu />
    </Wrapper>
  );
}
