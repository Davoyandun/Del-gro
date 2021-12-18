import Sequelize from "sequelize";
import Brand from "./brand";
import Crop from "./crop";
import Pest from "./pest";

import { sequelize } from "../database/db";


const Product = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      // allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    presentation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    composition: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    test: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
   
    stock: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// el producto pertenece a diferentes marcas
Product.belongsToMany(Brand, { through:'product_brand' });
Brand.belongsToMany(Product, { through:'product_brand' });

// el producto pertenece a diferentes cultivos 
Product.belongsToMany(Crop, { through:'product_crop' });
Crop.belongsToMany(Product, { through:'product_crop' });

// El producto pretenece a diferentes plagas
Product.belongsToMany(Pest, { through:'product_pest' });
Pest.belongsToMany(Product, { through:'product_pest' });

export default Product;
