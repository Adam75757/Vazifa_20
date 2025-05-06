import connect from "../config/db.js";

let GET = async(req,res)=>{

try {
    
let [data ]= await connect.query("select * from cars")


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

        let {name,price} = req.body
    
        let [data] = await connect.query("insert into cars(name,price) values (?,?)",[name,price])
        
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

        let {id,name,price} = req.body
    
        let [data] = await connect.query("update cars set name =?,price =? where id = ?",[name,price,id])
        
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
    
        let [data] = await connect.query("delete from cars where id = ?",[id])
        
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










