import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Carrusel from "../models/carrusel";


export async function postCarrusel(req, res) {
    try {
  const {
    name,
    description,
    image,

  } = req.body;


    let newImg = await Carrusel.create({
      name,
      description,
      image,

    });
    return res.json({ message: "ok", data: newImg });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

export async function getCarrusel(req, res) {
    try {
      Carrusel.findAll().then((response) =>
        res.status(200).json({
          message: "Todos los cultivos en base de Datos",
          data: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }