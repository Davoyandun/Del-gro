import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Pests from "../models/pest";
import Products from "../models/product";




export async function postPest(req, res) {
    try {
  const {
    name,
    description,
    image,

  } = req.body;

    let newPest = await Pests.create({
      name,
      description,
      image,

    });
    return res.json({ message: "ok", data: newPest });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

export async function getPests(req, res) {
  try {
    Pests.findAll({
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