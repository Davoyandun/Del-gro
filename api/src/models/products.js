import Sequelize from "sequelize";
import Brands from "./brands";

import { sequelize } from "../database/db";

const Products = sequelize.define(
  "products",
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
      type: Sequelize.INTEGER,
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
Products.belongsTo(Brands, { foreignKey: "id_products", sourceKey: "id" });
Brands.hasMany(Products, { foreignKey: "id_products", sourceKey: "id" });

export default Products;
