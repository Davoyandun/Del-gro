import React from "react";
import {  NavLink } from "react-router-dom";

export default function CardBlog({ image, name, id, description }) {

  return (
      <div>
          <NavLink to={`/home/blogs/${id}`}>
        <h3>{name}</h3>
    </NavLink>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
  );
}
