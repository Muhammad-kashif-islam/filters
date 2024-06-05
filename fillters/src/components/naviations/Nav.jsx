import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./nav.css";
function Nav({ searchInput }) {
  return (
    <nav>
      <div>
        <input
          type="text"
          className="search-input"
          name=""
          id=""
          placeholder="search here"
          onChange={(e) => searchInput(e)}
        />
      </div>
      <div className="profile-container">
        <a href="">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
