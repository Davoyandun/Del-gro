export const BaseURL = "http://localhost:3001/";



export function verificationForm(e) {
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
