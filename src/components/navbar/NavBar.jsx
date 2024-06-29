import React from "react";
import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar(prop) {
  const {pathname}=useLocation()

  // console.log("location obj",location);
  const nav=useNavigate()
  const handleHomeNavigation=()=>{
    nav("/")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom  fixed-top">
        <div className="container-fluid px-md-5">
          <span onClick={handleHomeNavigation} id="name" className="navbar-brand fw-bold pointer"  href="#">
           {prop.title}
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
            {pathname==="/" && (<>
              <CategorySelector/>
              <SearchBar/>
            </>)}   
            <CartButton/>
          </div>
        </div>
      </nav>
    </div>
  );
}
