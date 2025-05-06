import mysql from "mysql2"
import dotenov from "dotenv"

dotenov.config()

let connect = mysql.createConnection({

host:process.env.HOST,
user:process.env.USER,
database:process.env.DATABASE,
password:process.env.PASSWORD



}).promise()



export default connect
