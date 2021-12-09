import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Products from "../models/product";
import Brand from "../models/brand";
import Crop from "../models/crop";
import Pest from "../models/pest";

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
    ids_brand,
    ids_pest,
    ids_crop,
  } = req.body;

  try {
    let newProduct = await Products.create({
      name,
      description,
      image,
      presentation,
      composition,
      price,
      test,
      stock,
    });

    if (ids_brand) {
      let brandProduct = await Brand.findAll({ where: { id: ids_brand } });
      await newProduct.addBrand(brandProduct);
    }
    if (ids_pest) {
      let pestProduct = await Pest.findAll({ where: { id: ids_pest } });
      await newProduct.addBrand(pestProduct);
    }
    if (ids_crop) {
      let cropProduct = await Brand.findAll({ where: { id: ids_crop } });
      await newProduct.addBrand(cropProduct);
    }

    return res.json({ message: "ok", data: newProduct });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

export async function getProducts (req, res){

  Products.findAll({
    include:[
      {
        model:Brand, 
        attributes:["id", "name"]
      },
      {
        model:Crop, 
        attributes:["id", "name"]
      },
      {
        model:Pest, 
        attributes:["id", "name"]
      }
    ]
  }).then(response =>  res.status(200).json(response))

}
