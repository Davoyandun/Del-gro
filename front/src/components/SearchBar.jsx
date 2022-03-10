import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";

export default function SearchBar() {
  const Context = useContext(AgroContext);
  const [filter, setFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Context.getProducts();
    setFilter(Context.products);
    setProducts(Context.products);
  }, []);

  let handleSearch = (e) => {
    setSearch(e.target.value);
    Context.searchByName({ name: e.target.value, type: "name" });
  };

  return (
    <>
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Busqueda"
        onChange={(e) => handleSearch(e)}
      />
    </>
  );
}
