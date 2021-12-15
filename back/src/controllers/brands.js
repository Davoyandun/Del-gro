import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Brands from "../models/brand";
import Products from "../models/product";



export async function postBrand(req, res) {
  try {
    const { name, description, image } = req.body;

    let newBrand = await Brands.create({
      name,
      description,
      image,
    });
    return res.json({ message: "Marca insertada con exito", data: newBrand });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

export async function getBrands(req, res) {
  try {
    Brands.findAll({
      include: [
        {
          model: Products,
          attributes: ["id", "name"],
        },
      ],
    }).then((response) =>
      res.status(200).json({
        message: "Todas las marcas en base de Datos",
        data: response,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
