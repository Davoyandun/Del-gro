import React, { useContext, useEffect } from "react";
import AgroContext from "../context/AgroContext";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

export default function Sidebar() {
  const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getCrops();
    Context.getBrands();
    Context.getPests();
  }, []);

  return (
    <div>
      <SearchBar />
      <div>
        <Filters title="Cultivos" element={Context.crops} types="crops"  />
      </div>
      <div>
          <Filters title= "Plagas" element ={Context.pests} types = "pests"/>
      </div>
      <div>
          <Filters title= "Marcas" element ={Context.brands} types = "brands"/>
      </div>
    </div>
  );
}
