import axios from "axios";
import Swal from "sweetalert2";
export const BaseURL = "http://localhost:3001/";

// verificacion de datos

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

// Limpieza de estados

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

// Manejo de cambio de estados
export async function handlerOnChange(e, state, setState) {
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

// envio de datos al Back

export async function handlerSubmitOthers(
  e,
  state,
  setState,
  handleClose,
  route,
  refresh,
  type,
) {
  e.preventDefault();
  let errors = verificationFormOthers(state);
  if (Object.entries(errors).length === 0) {
    await axios
      .post(`${BaseURL}${route}`, state)
      .then(() => {
        handleClose();

        Swal.fire({
          icon: "success",
          title: `${type} Agregado/a Correctamente`,
          text: `${state.name} se agrego a la base de datos`,
        });
        clearState(setState);
      })
      .catch(() => {
        Swal.fire({
          icon: "warning",
          title: "Algo Salio mal",
          text: `No se logro almacenar el ${type}`,
        });
      });
    refresh();
  } else {
    errors = Object.values(errors);
    Swal.fire({
      icon: "warning",
      title: "Espacios vacios en el formulario",
      text: errors.toString(),
    });
  }
}

export async function handlerDelete( event , element ,  route , refresh) {
  event.preventDefault();
  Swal.fire({
    title: `Eliminar ${element.name}`,
    showCancelButton: true,
    showDenyButton: true,
    denyButtonText: `Conservar`,
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`${BaseURL}${route}/${element.id}`)
        .then(() => {
          Swal.fire("Eliminado!", "", "success");
        })
        .catch(() => {
          Swal.fire(
            "Algo salio mal, no se pudo eliminar el producto!",
            "",
            "warning"
          );
        });
        refresh()
    } else if (result.isDenied) {
      Swal.fire("El producto sigue disponible", "", "info");
    }
  });
}

// EDICION DE ELEMENTOS

export function handlertElementEditOpen(
  event,
  element,
  state,
  setState,
  handleShowEdit
) {
  event.preventDefault();

  setState({
    ...state,
    id: element.id,
    name: element.name,
    image: element.image,
    description: element.description,
  });
  handleShowEdit();
}
export async function handlerSubmitEditOthers(
  e,
  state,
  setState,
  handleClose,
  route,
  refresh,
  type
) {
  e.preventDefault();
  let errors = verificationFormOthers(state);
  if (Object.entries(errors).length === 0) {
    await axios
      .put(`${BaseURL}${route}`, state)
      .then(() => {
        handleClose();
        

        Swal.fire({
          icon: "success",
          title: `${type} editado correctamente`,
          text: `${type} ${state.name} ha sido Modificado/a`,
        });
        clearState(setState);
      })
      .catch(() => {
        Swal.fire({
          icon: "warning",
          title: "Algo Salio mal",
          text: `No se logro almacenar el/la ${type}`,
        });
      });
      refresh()
  } else {
    errors = Object.values(errors);
    Swal.fire({
      icon: "warning",
      title: "Espacios vacios en el formulario",
      text: errors.toString(),
    });
  }
}
