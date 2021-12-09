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