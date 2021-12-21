import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Crop from "../models/crop";
import Product from "../models/product";


export async function postCrop(req, res) {
    try {
  const {
    name,
    description,
    image,

  } = req.body;


    let newCrop = await Crop.create({
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
    Crop.findAll({
      include: [
        {
          model: Product,
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
export async function putCrops(req, res) {
  const { name, description, image } = req.body;
  const { id } = req.params;
  try {
    await Crop.update(
      {
        name,
        description,
        image,
      },
      { where: { id: id } }
    );

    return res.status(200).json({ message: "Crop  updated successfully" });
  } catch (err) {
    console.log(err);
  }
}