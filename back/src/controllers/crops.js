import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Crops from "../models/crop";


export async function postCrop(req, res) {
    try {
  const {
    name,
    description,
    image,

  } = req.body;


    let newCrop = await Crops.create({
      name,
      description,
      image,

    });
    return res.json({ message: "ok", data: newCrop });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}