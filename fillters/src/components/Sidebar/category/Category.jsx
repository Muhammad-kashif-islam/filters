import React from "react";
import "./category.css";
import Input from "../../Input";

function Category({ onChangeRadio }) {
  return (
    <section className="category">
      <h2 className="sidebar-title">Category</h2>
      <div className="input-container">
        <div className="inputs">
          <input
            onChange={(e) => onChangeRadio(e)}
            type="radio"
            value=""
            name="category"
          />
          <span className="category-title">All</span>
        </div>
        <Input
          handleChange={onChangeRadio}
          name="category"
          title="Sneakers"
          value="sneakers"
        />
        <Input
          handleChange={onChangeRadio}
          name="category"
          title="Flats"
          value="flats"
        />
        <Input
          handleChange={onChangeRadio}
          name="category"
          title="Sandals"
          value="sandals"
        />
        <Input
          handleChange={onChangeRadio}
          name="category"
          title="Heels"
          value="heels"
        />
      </div>
    </section>
  );
}

export default Category;
