export const BaseURL = "http://localhost:3001/";



export function verificationFormProducts(e) {
  const errors = {};

  if (!e.name) errors.name = "Nombre no registrado";
  if (!e.description) errors.description = "Descripcion no registrada";
  if (!e.image) errors.image = "Imagen  no registrada";
  if (!e.composition) errors.composition = "Composición  no registrada";
  if (!e.price) errors.price = "Precio  no registrado";
  if (!e.test) errors.price = "Ensayos   no registrados";
  if (e.ids_brand.length === 0) errors.ids_brand = "Marca no seleccionada";
  if (e.ids_pest.length === 0) errors.ids_pest = "Plagas no seleccionadas";
  if (e.ids_crop.length === 0) errors.ids_crop = "Cultivos no seleccionados";

  return errors;
}

export function verificationFormOthers(e) {
  const errors = {};

  if (!e.name) errors.name = "Nombre no registrado";
  if (!e.description) errors.description = "Descripcion no registrada";
  if (!e.image) errors.image = "Imagen  no registrada";


  return errors;
}




export function clearState(setState) {
  return setState({
    name: "",
    description: "",
    image: "",
    presentation: " ",
    composition: "",
    price: "",
    test: " ",
    stock: true,
    ids_brand: [],
    ids_pest: [],
    ids_crop: [],
  });
}
export   async function handlerOnChange(e, state, setState) {
  if (e.target.name === "image") {
    let file = e.target.files;

    let formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "DelAgro");
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/salvatorehnery/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const img = await res.json();

    setState({
      ...state,
      image: img.secure_url,
    });
  } else {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
}

export function handlerBrand(e, state, setState) {
  if (e.target.checked) {
    if (!state.ids_brand.includes(parseInt(e.target.value))) {
      setState({
        ...state,
        ids_brand: [...state.ids_brand, parseInt(e.target.value)],
      });
    }
  } else {
    setState({
      ...state,
      ids_brand: [
        ...state.ids_brand.filter((id) => id !== parseInt(e.target.value)),
      ],
    });
  }
}


 export function handlerCrop(e, state, setState) {
  if (e.target.checked) {
    if (!state.ids_crop.includes(parseInt(e.target.value))) {
      setState({
        ...state,
        ids_crop: [...state.ids_crop, parseInt(e.target.value)],
      });
    }
  } else {
    setState({
      ...state,
      ids_crop: [
        ...state.ids_crop.filter((id) => id !== parseInt(e.target.value)),
      ],
    });
  }
}
 export function handlerPest(e, state, setState) {
  if (e.target.checked) {
    if (!state.ids_pest.includes(parseInt(e.target.value))) {
      setState({
        ...state,
        ids_pest: [...state.ids_pest, parseInt(e.target.value)],
      });
    }
  } else {
    setState({
      ...state,
      ids_pest: [
        ...state.ids_pest.filter((id) => id !== parseInt(e.target.value)),
      ],
    });
  }
}