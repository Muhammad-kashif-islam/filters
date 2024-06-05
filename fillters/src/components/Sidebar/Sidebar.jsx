import React from "react";
import "./sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";
function Sidebar({ onChangeRadio }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category onChangeRadio={onChangeRadio} />
        <Price onChangeRadio={onChangeRadio} />
        <Colors onChangeRadio={onChangeRadio} />
      </section>
    </>
  );
}

export default Sidebar;
