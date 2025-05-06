import customers from "../customers/customers.js"
import { Router } from "express"


let router_customer = Router()



router_customer.get("/api/customers",customers.GET)
router_customer.post("/api/customer",customers.POST)
router_customer.put("/api/customers",customers.PUT)
router_customer.delete("/api/customer",customers.DELETE)




    











export default router_customer


