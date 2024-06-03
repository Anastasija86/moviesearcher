import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";


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
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
 }
export { Layout };
