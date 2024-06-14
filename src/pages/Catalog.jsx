import React from "react";
import styled from "styled-components";
import img1 from "assets/images/img1.jpg";
import img2 from "assets/images/img2.jpg";
import img3 from "assets/images/img3.jpg";
import left from "assets/images/left.png";
import right from "assets/images/right.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  padding: 100px 0px 100px 0px;
  height: 100%;
  width: 100%;
  background-color: #f2f6f4;
`;
const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ArrowLeft = styled.button`
  position: absolute;
  left: 110px;
  bottom: 240px;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
const ArrowRight = styled.button`
  position: absolute;
  right: 110px;
  bottom: 240px;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
const ImgLeft = styled.img`
  width: 20px;
  height: 20px;
`;
const ImgRight = styled.img`
  width: 20px;
  height: 20px;
`;
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 400px;
`;
const CartImg = styled.img`
  width: 280px;
  height: 240px;
`;
const TextCategory = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #9d9ea2;
  font-weight: 300;
  font-size: 14px;
  font-family: Lexend;
  line-height: 21px;
  letter-spacing: 0px;
`;
const TextCart = styled.h3`
  text-align: center;
  color: #1a1e26;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  font-family: Lexend;
  letter-spacing: 0px;
`;

const Button = styled.button`
  padding: 0px, 24px, 0px, 24px;
  background-color: #17af26;
  border: none;
  cursor: pointer;
  width: 128px;
  height: 40px;
  border-radius: 100px;
  color: #ffffff;
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
`;

function Catalog() {
  return (
    <Wrapper>
      <CartWrapper>
        <CartContainer>
          <ArrowLeft>
            <ImgLeft src={left} alt="left" />
          </ArrowLeft>
          <CartImg src={img1} alt="img1" />
          <TextCategory>FLOWER</TextCategory>
          <TextCart>2 Oz Deal Watermelon Zkittles + Purple Gushers</TextCart>
          <Button>Add to Cart</Button>
        </CartContainer>
        <CartContainer>
          <CartImg src={img2} alt="img2" />
          <TextCategory>FLOWER</TextCategory>
          <TextCart>2 Oz Deal Ahi Tuna + Master Tuna</TextCart>
          <Button>Add to Cart</Button>
        </CartContainer>
        <CartContainer>
          <ArrowRight>
            <ImgRight src={right} alt="right" />
          </ArrowRight>
          <CartImg src={img3} alt="img3" />
          <TextCategory>CONCENTRATES</TextCategory>
          <TextCart>Mix And Match Shatter/Budder 28g (4 X 7G)</TextCart>
          <Button>Add to Cart</Button>
        </CartContainer>
      </CartWrapper>
    </Wrapper>
  );
}
export { Catalog };
