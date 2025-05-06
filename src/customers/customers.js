import connect from "../config/db.js";

let GET = async(req,res)=>{

try {
    
let [data ]= await connect.query("select * from customers")


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
        let { name, phone } = req.body;

        if (phone.length >= 13 && phone[0] !== "+")  throw new Error("Phone is error");







        let [data] = await connect.query("insert into customers(name,phone) values (?,?)",[name,phone])
        
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

        let {id,name,phone} = req.body
    
        let [data] = await connect.query("update customers set name =?,phone =? where id = ?",[name,phone,id])
        
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
    
        let [data] = await connect.query("delete from customers where id = ?",[id])
        
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