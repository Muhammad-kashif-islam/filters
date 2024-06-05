import React from "react";
import "./recommended.css";
function Recommended({ onSelectedButton }) {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended-btn">
        <button className="btn" onClick={(e) => onSelectedButton(e)}>
          All Products
        </button>
        <button
          className="btn"
          value="Nike"
          onClick={(e) => onSelectedButton(e)}
        >
          Nike
        </button>
        <button
          className="btn"
          value="Adidas"
          onClick={(e) => onSelectedButton(e)}
        >
          Adidas
        </button>
        <button
          className="btn"
          value="Puma"
          onClick={(e) => onSelectedButton(e)}
        >
          Puma
        </button>
        <button
          className="btn"
          value="Vans"
          onClick={(e) => onSelectedButton(e)}
        >
          Vans
        </button>
      </div>
    </div>
  );
}

export default Recommended;
