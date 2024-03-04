import React from "react";
import styled from "styled-components";
import { Button } from "../components/uiPrimitives/Button";

const Wrapper = styled.section`
  background: conic-gradient(
    from 100deg at 50% 50%,
    rgba(5, 66, 44, 1),
    rgba(100, 138, 124, 1),
    rgba(5, 66, 44, 1)
  );
  height: 100%;
  width: 100%;
  padding: 3rem 4.5rem;
  margin-top: 7.85rem;
`;

const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bolder;
  color: rgba(255, 255, 255, 1);
  width: 42rem;
  margin-bottom: 5.4rem;
  box-sizing: border-box;
  word-wrap: break-word;
`;
const BestSeller = styled.p`
  color: rgba(242, 188, 27, 1);
  font-size: 1rem;
  margin-buttom: 1rem;
  cursor: pointer;
`;
const Text = styled.p`
  color: rgba(244, 244, 244, 1);
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 4.3rem;
`;
const TextPromo = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;
const Line = styled.span`
  border: 1px solid rgba(157, 158, 162, 1);
  height: 1rem;
  margin-right: 2rem;
  margin-left: 2rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <BestSeller>BEST SELLER</BestSeller>
      <Title>BEST DISPENSARY TO BUY WEED ONLINE </Title>
      <Text>Vitamins & Supplements</Text>
      <TextWrapper>
        <TextPromo>Get 25% off</TextPromo>
        <Line></Line>
        <TextPromo>Free Shipping</TextPromo>
      </TextWrapper>
      <Button>Catalog</Button>
    </Wrapper>
  );
}
