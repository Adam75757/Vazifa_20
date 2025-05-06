import express from "express"
import dotenv from "dotenv"
import router_cars from "./cars/router.js"
import router_customer from "./customers/router.js"
import router_order from "./orders/router.js"
import router_payments from "./payments/router.js"


dotenv.config()
let server = express()
server.use(express.json())
server.use(router_cars)
server.use(router_customer)
server.use(router_order)
server.use(router_payments)
let PORT = process.env.PORT || 7575
server.listen(PORT,()=>{
console.log("SERVER IS RUNNING");
 
})


 





















