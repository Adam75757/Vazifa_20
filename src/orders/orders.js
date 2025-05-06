import connect from "../config/db.js";

let GET = async(req,res)=>{

try {
    
let [data ]= await connect.query("select * from orders")


res.status(200).json({
    status:200,
    data:{
        data
    }
})



} catch (error) {
    
res.status(400).json({
    status:400,
    message:error.message
})


}





}



let POST = async(req,res)=>{


    try {

        let {cars_id,customer_id,quantity,month} = req.body
    
        let [data] = await connect.query("insert into orders(cars_id,customer_id,quantity,month) values (?,?,?,?)",[cars_id,customer_id,quantity,month])
        
        console.log(data);
        
        res.status(200).json({
            status:200,
            message:"user create"
            
        })
        
        
        
        } catch (error) {
            
        res.status(400).json({
            status:400,
            message:error.message
        })
        
        
        }
        
        





}


let PUT = async(req,res)=>{





    try {

        let {id,car_id,customer_id,quantity,month} = req.body
    
        let [data] = await connect.query("update orders set car_id =?,customer_id=?,quantity=?,month=? where id =?",[car_id,customer_id,quantity,month,id])
        
        console.log(data);
        
        res.status(200).json({
            status:200,
            message:"user update"
            
        })
        
        
        
        } catch (error) {
            
        res.status(400).json({
            status:400,
            message:error.message
        })
        
        
        }
        
        






}

let DELETE = async(req,res)=>{





    try {

        let {id} = req.body
    
        let [data] = await connect.query("delete from orders where id = ?",[id])
        
        console.log(data);
        
        res.status(200).json({
            status:200,
            message:"user delete"
            
        })
        
        
        
        } catch (error) {
            
        res.status(400).json({
            status:400,
            message:error.message
        })
        
        
        }
        
        






}



export default {
    GET,
    POST,
    PUT,
    DELETE

    
}

