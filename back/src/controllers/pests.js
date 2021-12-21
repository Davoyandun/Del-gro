import { async } from "regenerator-runtime";
import Sequelize, { where } from "sequelize";
import Pest from "../models/pest";
import Product from "../models/product";

export async function postPest(req, res) {
  const { name, description, image } = req.body;
  try {
    let newPest = await Pest.create({
      name,
      description,
      image,
    });
    return res.status(200).json({ message: "ok", data: newPest });
  } catch (err) {
    console.log(err);
  }
}

export async function getPests(req, res) {
  try {
    Pest.findAll({
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

export async function putPest(req, res) {
  const { name, description, image } = req.body;
  const { id } = req.params;
  try {
    await Pest.update(
      {
        name,
        description,
        image,
      },
      { where: { id: id } }
    );

    return res.status(200).json({ message: "Pest  updated successfully" });
  } catch (err) {
    console.log(err);
  }
}


export async function deletePest(req, res) {
  const { id } = req.params
  try {
       await Pest.destroy({ where: { id: id } })
      return res.status(200).json({
          message: 'Pest deleted successfully',
      
      })
  } catch (err) {
      console.log(err)
      res.status(500).json({
          message: 'Something goes Wrong',
          data: {}

      })

  }
}
