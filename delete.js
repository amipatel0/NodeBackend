const dbConnect = require('./mongodb');

const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteOne({sname:'Kinjal Shah'})
console.log(result)

}
 
deleteData();