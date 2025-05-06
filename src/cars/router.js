import cars from "../cars/cars.js"
import { Router } from "express"


let router_cars = Router()



router_cars.get("/api/cars",cars.GET)
router_cars.post("/api/post",cars.POST)
router_cars.put("/api/put",cars.PUT)
router_cars.put("/api/delete",cars.DELETE)




    











export default router_cars




