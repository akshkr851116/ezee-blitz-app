import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/product/ProductSlice";
import { set } from "lodash";
export default function SearchBar() {
  const { searchTerm } = useSelector((state) => state.products);
	const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    dispatch(setSearchTerm (e.target.value))
  };
  console.log(text);
  return (
    <div>
      <form
        type="search"
        onSubmit={handleSubmit}
        className="d-flex ms-md-0 ms-lg-3 lg-3"
      >
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Products"
          className="form-control ms-md-auto me-2"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
    </div>
  );
}
