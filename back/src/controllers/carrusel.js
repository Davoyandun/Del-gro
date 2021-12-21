import { async } from "regenerator-runtime";
import Sequelize from "sequelize";
import Carrusel from "../models/carrusel";


export async function postImg(req, res) {
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
          message: "Todos los carruseles en base de Datos",
          data: response,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  


  export async function putCarrusel(req, res) {
    const { name, description, image } = req.body;
    const { id } = req.params;
    try {
      await Carrusel.update(
        {
          name,
          description,
          image,
        },
        { where: { id: id } }
      );
  
      return res.status(200).json({ message: "Carrusel  updated successfully" });
    } catch (err) {
      console.log(err);
    }
  }

  export async function deleteCarrusel(req, res) {
    const { id } = req.params
    try {
         await Carrusel.destroy({ where: { id: id } })
        return res.status(200).json({
            message: 'Carrusel deleted successfully',
        
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes Wrong',
            data: {}
  
        })
  
    }
  }