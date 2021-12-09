import  Sequelize  from 'sequelize';

import  {sequelize}  from '../database/db';

const Pest = sequelize.define('pest', {
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

export default Pest;