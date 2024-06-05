import React from "react";
import "./price.css";
import Input from "../../Input";
function Price({ onChangeRadio }) {
  return (
    <section className="price">
      <h2 className="sidebar-title">Price</h2>
      <div className="input-container">
        <div className="inputs">
          <input
            onChange={(e) => onChangeRadio(e)}
            type="radio"
            value=""
            name="price"
          />
          <span className="category-title">All</span>
        </div>
        <Input
          handleChange={onChangeRadio}
          name="price"
          title="$0 - $50"
          value={50}
          // color="red"
        />
        <Input
          handleChange={onChangeRadio}
          name="price"
          title="$50 - $100"
          value={100}
          // color="red"
        />
        <Input
          handleChange={onChangeRadio}
          name="price"
          title="$100 - $150"
          value={150}
          // color="red"
        />
        <Input
          handleChange={onChangeRadio}
          name="price"
          title="$150 - $200"
          value={200}
          // color="red"
        />
      </div>
    </section>
  );
}

export default Price;
