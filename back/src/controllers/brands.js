import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Brand from "../models/brand";

import Product from "../models/product";



export async function postBrand(req, res) {
  try {
    const { name, description, image } = req.body;

    let newBrand = await Brand.create({
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
    Brand.findAll({
      include: [
        {
          model: Product,
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


export async function putBrand(req, res) {
  const { name, description, image } = req.body;
  const { id } = req.params;
  try {
    await Brand.update(
      {
        name,
        description,
        image,
      },
      { where: { id: id } }
    );

    return res.status(200).json({ message: "Brand  updated successfully" });
  } catch (err) {
    console.log(err);
  }
}


export async function deleteBrand(req, res) {
  const { id } = req.params
  try {
       await Brand.destroy({ where: { id: id } })
      return res.status(200).json({
          message: 'Brand deleted successfully',
      
      })
  } catch (err) {
      console.log(err)
      res.status(500).json({
          message: 'Something goes Wrong',
          data: {}

      })

  }
}
