import mysql2 from "mysql2/promise";
import dotenv from 'dotenv'

dotenv.config()

const learnDB = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10
});

export default learnDB;