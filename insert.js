const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insertMany(
      [
          {sid:'S06',sname:'Neha Patel',sem:'02'},
          {sid:'S07',sname:'Meshwa Patel',sem:'01'},

      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();