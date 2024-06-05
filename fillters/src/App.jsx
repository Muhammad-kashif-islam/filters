import { useState } from "react";
import "./App.css";
import Nav from "./components/naviations/Nav";
import Products from "./components/products/Products";
import Recommended from "./components/recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./db/Data";
import Card from "./components/Card";
function App() {
  const [query, setquery] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchInput = (e) => {
    setquery(e.target.value);
  };
  const onSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  const onSelectedButton = (e) => {
    setSelectedCategory(e.target.value);
  };
  const fillteredData = (products, selected, query) => {
    let fillterProductIs = products;

    if (query != null && query.trim().length > 0) {
      fillterProductIs = products.filter((product) => {
        return (
          product.title
            .toLocaleLowerCase()
            .indexOf(query.toLocaleLowerCase()) !== -1
        );
      });
    }
    if (selected) {
      fillterProductIs = fillterProductIs.filter(
        ({ color, category, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          title === selected ||
          company === selected
      );
      return fillterProductIs;
    }
    return fillterProductIs;
  };
  const results = fillteredData(data, selectedCategory, query);
  return (
    <>
      <Sidebar onChangeRadio={onSelectedCategory} />
      <Nav searchInput={searchInput} />
      <Recommended onSelectedButton={onSelectedButton} />
      <Products products={results} />
    </>
  );
}

export default App;
