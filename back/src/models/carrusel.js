import  Sequelize  from 'sequelize';

import  {sequelize}  from '../database/db';

const Carrusel = sequelize.define('carrusel', {
    id: {
        type: Sequelize.INTEGER,
     
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
  
      },

},{
  timestamps: false,
})

export default Carrusel;