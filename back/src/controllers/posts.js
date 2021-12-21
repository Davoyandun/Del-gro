import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Post from "../models/post";

export async function postPosts(req, res) {
  const { name, description, image } = req.body;
  try {
    let newPost = await Post.create({
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
    Post.findAll().then((response) =>
       res.status(200).json({
        message: "Todos los Posts en base de Datos",
        data: response,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
export async function putPost(req, res) {
  const { name, description, image } = req.body;
  const { id } = req.params;
  try {
    await Post.update(
      {
        name,
        description,
        image,
      },
      {
        where: {
          id: id,
        },
      }
    );
   return  res.status(200).json({
      message: "Post updated successfully",
    });
  } catch (error) {
     return console.log(error);
  }
}


export async function deletePost(req, res) {
  const { id } = req.params
  try {
       await Post.destroy({ where: { id: id } })
      return res.status(200).json({
          message: 'Post deleted successfully',
      
      })
  } catch (err) {
      console.log(err)
      res.status(500).json({
          message: 'Something goes Wrong',
          data: {}

      })

  }
}

