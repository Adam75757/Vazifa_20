import payments from "../payments/payments.js"
import { Router } from "express"


let router_payments = Router()



router_payments.get("/api/payments",payments.GET)
router_payments.post("/api/payment",payments.POST)
router_payments.put("/api/payment",payments.PUT)
router_payments.put("/api/payment_put",payments.DELETE)




    







export default router_payments


