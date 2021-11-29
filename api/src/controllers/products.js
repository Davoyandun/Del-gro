import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Products from "../models/products";

export async function postProduct(req, res) {
  const {
    name,
    description,
    image,
    presentation,
    composition,
    price,
    test,
    stock,
  } = req.body;

  try {
    let newProducts = await Products.create({
      name,
      description,
      image,
      presentation,
      composition,
      price,
      test,
      stock,
    });
    return res.json({ message: "ok", data: newProducts });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}
