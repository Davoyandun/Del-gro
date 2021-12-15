import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Crops from "../models/crop";
import Products from "../models/product";


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

export async function getCrops(req, res) {
  try {
    Crops.findAll({
      include: [
        {
          model: Products,
          attributes: ["id", "name"],
        },
      ],
    }).then((response) =>
      res.status(200).json({
        message: "Todos los cultivos en base de Datos",
        data: response,
      })
    );
  } catch (error) {
    console.log(error);
  }
}