import React, { useContext, useEffect } from "react";
import AgroContext from "../context/AgroContext";

export default function Filters({ title, element, types  }) {
  const Context = useContext(AgroContext);
  const handlerSelect = (e) => {
   

    Context.searchByName({ name: e.target.value, type:  types  });
  };

  if (element) {
    return (
      <div>
        <div>Seleccione {title}</div>
        <form>
          <select onChange={(e) => handlerSelect(e)}>
            <option value="all">Todos</option>
            {element.map((crop) => (
              <option value={crop.id} key={crop.id}>
                {crop.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p>No existen {title}</p>
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
