import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Brands from "../models/brands";


export async function postBrand(req, res) {
    try {
  const {
    name,
    description,
    image,

  } = req.body;


    let newBrand = await Brands.create({
      name,
      description,
      image,

    });
    return res.json({ message: "ok", data: newBrand });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}
