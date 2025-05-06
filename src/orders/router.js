import order from "../orders/orders.js"
import { Router } from "express"


let router_order = Router()



router_order.get("/api/orders",order.GET)
router_order.post("/api/order",order.POST)
router_order.put("/api/order",order.PUT)
router_order.delete("/api/order_delete",order.DELETE)




    











export default router_order


