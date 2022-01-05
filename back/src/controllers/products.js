import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Product from "../models/product";
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
    let newProduct = await Product.create({
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
      await newProduct.addPest(pestProduct);
    }
    if (ids_crop) {
      let cropProduct = await Crop.findAll({ where: { id: ids_crop } });
      await newProduct.addCrop(cropProduct);
    }

    return res.json({ message: "ok", data: newProduct });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

export async function getProducts(req, res) {
  try {
    Product.findAll({
      include: [
        {
          model: Brand,
          attributes: ["id", "name"],
        },
        {
          model: Crop,
          attributes: ["id", "name"],
        },
        {
          model: Pest,
          attributes: ["id", "name"],
        },
      ],
    }).then((response) => res.status(200).json(response));
  } catch (error) {
    return console.log(error);
  }
}

export async function putProduct(req, res) {
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
  const { id } = req.params;

  try {
    await Product.update(
      {
        name: name,
        price: price,
        description: description,
        image: image,
        stock: stock,
        presentation: presentation,
        composition: composition,
        test: test,
        stock: stock,
      },
      {
        where: { id: id },
        include: [{ model: Brand }, { model: Crop }, { model: Pest }],
      }
    );
    const product = await Product.findOne({
      where: { id: id },
      include: [{ model: Brand }, { model: Crop }, { model: Pest }],
    });
    if (ids_brand) {
      var brand = await Brand.findAll({
        where: { id: ids_brand },
      });
      await product.setBrands(brand);
    }
    if (ids_crop) {
      var crop = await Crop.findAll({
        where: { id: ids_crop },
      });
      await product.setCrops(crop);
    }
    if (ids_pest) {
      var pest = await Pest.findAll({
        where: { id: ids_pest },
      });
      await product.setPests(pest);
    }

    return res.json({
      message: "Product updated successfully",
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { id: id } });
    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something goes Wrong",
      data: {},
    });
  }
}
