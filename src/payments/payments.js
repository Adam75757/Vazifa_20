import connect from "../config/db.js";

let GET = async (req, res) => {
    try {
        let [rows] = await connect.query("SELECT order_id, price, month FROM payments");

        let result = rows.map(row => {
            let count = 0;

            if (row.month === 1) count = 0.15;
            

            if (row.month === 3) count = 0.30;

            if (row.month === 6) count = 0.55;

            let new_price = row.price - (row.price * count);

            return {
                order_id: row.order_id,
                month: row.month,
                price: new_price
            };
        });

        res.status(200).json({
            status: 200,
            data: result
        });

    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};




let POST = async(req,res)=>{


    try {
        let {order_id,price,month} = req.body

        
        let [data] = await connect.query("insert into payments(order_id,price,month) values (?,?,?)",[order_id,price,month])
        
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

        let {id,order_id,price,month} = req.body
    
        let [data] = await connect.query("update payments set order_id =?,price =?,month=? where id = ?",[order_id,price,month,id])
        
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
    
        let [data] = await connect.query("delete from payments where id = ?",[id])
        
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
