const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"empdb"

});
con.connect((err)=>{
    if(err)
        {
            console.warn("connection error")
        }
})
module.exports=con;