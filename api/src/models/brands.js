import  Sequelize  from 'sequelize';

import  {sequelize}  from '../database/db';

const Brands = sequelize.define('brands', {
    id: {
        type: Sequelize.INTEGER,
        // allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
  
      },

})

export default Brands; 