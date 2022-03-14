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
    const target = []
    if (e.target.checked) {
      if (select.options.filter((element) => element.id != e.target.name)) {
        setSelect({
          ...select,
          options: [...select.options, e.target.name],
        });
        target.push(e.target.name)
      }
    } else {
      if (select.options.filter((element) => element.id == e.target.name)) {
        setSelect({
          ...select,
          options: [
            ...select.options.filter((element) => element != e.target.name),
          ],
        });
        target.filter(element=> element!=e.target.name)
      }
    }
    
    
    Context.searchByName({ options: e.target.name, type: "crops" });
  };

  if (Context.crops) {
    return (
      <form>
          <label onChange={(e) => handlerSelect(e)} >
            <input type="checkbox" name="all" value={select.options} />
           todos
          </label>
        {Context.crops.map((element) => (
          <label onChange={(e) => handlerSelect(e)} key = {element.id}>
            <input type="checkbox" name={element.id} value={select.options} />
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

// codigo basura de handler select

// let target= []
// if (e.target.checked) {
//   if (select.options.filter((element) => element.id != e.target.value)) {
//     setSelect({
//       ...select,
//       options: [...select.options, e.target.value],
//     });
//     Context.searchByName({ options:(e.target.value) , type: "crops"})
//   }
// } else {
//   if (select.options.filter((element) => element.id == e.target.value)) {
//     setSelect({
//       ...select,
//       options: [
//         ...select.options.filter((element) => element != e.target.value),
//       ],
//     });
//   }
// }
