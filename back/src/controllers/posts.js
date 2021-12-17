import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Posts from "../models/post";


export async function postPosts(req, res) {
    try {
  const {
    name,
    description,
    image,

  } = req.body;


    let newPost = await Posts.create({
      name,
      description,
      image,

    });
    return res.json({ message: "ok", data: newPost });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}


export async function getPosts(req, res) {
  try {
    Posts.findAll().then((response) =>
      res.status(200).json({
        message: "Todos los Posts en base de Datos",
        data: response,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

