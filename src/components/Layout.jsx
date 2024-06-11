import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import styled from "styled-components";

const Main = styled.main`
  flex: 1;
  margin-top: 7.75rem;
  margin-bottom: 1rem;
  overflow-y: auto;
`;
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

function Layout() {
  window.onscroll = function () {
    var e = document.getElementById("scrolltop");
    if (!e) {
      e = document.createElement("a");
      e.id = "scrolltop";
      e.href = "#";
      document.body.appendChild(e);
    }
    e.style.display =
      document.documentElement.scrollTop > 200 ? "block" : "none";
    e.onclick = (ev) => {
      ev.preventDefault();
      document.documentElement.scrollTop = 0;
    };
  };
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
}
export { Layout };
