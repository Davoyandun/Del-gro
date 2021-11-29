import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Pests from "../models/pests";


export async function postPests(req, res) {
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