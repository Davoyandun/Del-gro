import { Sequelize } from 'sequelize';
require('dotenv').config()

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

export const sequelize = process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgresql",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
            max: 3,
            min: 1,
            idle: 10000,
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    })
    : new Sequelize(
        `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/beftlrlfdkngt3fmk8to`,
        {
            logging: false, // set to console.log to see the raw SQL queries
        })