import React from "react";
import "./colors.css";
import Input from "../../Input";

function Colors({ onChangeRadio }) {
  return (
    <section className="colors">
      <h2 className="sidebar-title">Colors</h2>
      <div className="input-container">
        <div className="inputs">
          <input
            onChange={(e) => onChangeRadio(e)}
            type="radio"
            value=""
            name="color"
          />
          <span className="category-title">All</span>
        </div>
        <Input
          handleChange={onChangeRadio}
          name="color"
          title="Black"
          color="black"
          value="black"
        />
        <Input
          handleChange={onChangeRadio}
          name="color"
          title="Blue"
          color="blue"
          value="blue"
        />
        <Input
          handleChange={onChangeRadio}
          name="color"
          title="Green"
          color="green"
          value="green"
        />
        <Input
          handleChange={onChangeRadio}
          name="color"
          title="Red"
          color="red"
          value="red"
        />
        <Input
          handleChange={onChangeRadio}
          name="color"
          title="White"
          color="white"
          value="white"
        />
      </div>
    </section>
  );
}

export default Colors;
