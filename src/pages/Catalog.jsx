import React from "react";
import styled from "styled-components";

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



export default function Catalog() {
  return (
    <Wrapper>
      <div>
        <section>
          <article>
            <img src="../components/images/img1.png" alt="img1" />
            <p>FLOWER</p>
            <h4>2 Oz Deal Watermelon Zkittles + Purple Gushers</h4>
          </article>
          <article>
          <img src="../components/images/img2.png" alt="img2" />
            <p>FLOWER</p>
            <h4>2 Oz Deal Ahi Tuna + Master Tuna</h4>
          </article>
          <article>
          <img src="../components/images/img3.png" alt="img3" />
            <p>CONCENTRATES</p>
            <h4>Mix And Match Shatter/Budder 28g (4 X 7G)</h4>
          </article>
        </section>
      </div>
    </Wrapper>
  );
}
