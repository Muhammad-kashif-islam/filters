import React from "react";
import "./products.css";
import Card from "../Card";
// import data from "../../db/Data";
function Products({ products }) {
  return (
    <section className="card-container">
      {products.length > 0 ? (
        products.map((product) => (
          <Card key={Math.random()} product={product} />
        ))
      ) : (
        <h1
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "500",
            color: "rgba(0,0,0,0.5)",
          }}
        >
          No query result
        </h1>
      )}
    </section>
  );
}

export default Products;
