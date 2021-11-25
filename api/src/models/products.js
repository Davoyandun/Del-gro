import Sequelize from "sequelize";
import Brands from "./brands";

import { sequelize } from "../database/db";

const Products = sequelize.define("products", {
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
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Products.belongsTo(Brands, { foreignKey: "id_products", sourceKey: "id" });
Brands.hasMany(Products, { foreignKey: "id_products", sourceKey: "id" });

export default Products;
