import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import { Formik, Field, Form } from "formik";

export default function Filters() {
  const Context = useContext(AgroContext);
  const [select, setSelect] = useState({ options: [] });
  useEffect(() => {
    Context.getCrops();
  }, []);

  const handlerSelect = (e) => {
    if (e.target.checked) {
      if (select.options.filter((element) => element.id != e.target.value)) {
        setSelect({
          ...select,
          options: [...select.options, e.target.value],
        });
      }
    } else {
      if (select.options.filter((element) => element.id == e.target.value)) {
        setSelect({
          ...select,
          options: [
            ...select.options.filter((element) => element != e.target.value),
          ],
        });
      }
    }
    Context.searchByName({ options: select.options, type: "crops"})


  };
  console.log(select);
  if (Context.crops) {
    return (
      <form>
        {Context.crops.map((element) => (
          <label onChange={(e) => handlerSelect(e)}>
            <input type="checkbox" name={element.name} value={element.id} />
            {element.name}
          </label>
        ))}
      </form>
    );
  } else {
    return (
      <div>
        <p>No existen cultivos</p>
      </div>
    );
  }
}
