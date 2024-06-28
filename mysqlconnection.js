const express = require('express');
const app = express();
const con = require('./config');

app.use(express.json());

app.get('/display', (req, res) => {
    con.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            res.send('Table connection error');
        } else {
            res.json(result); 
            console.log(result);
        }
    });
});

app.post('/', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO employee SET ?', data, (error, result) => {
        if (error) {
            res.send('Error in connecting API');
        } else {
            res.json(result); 
        }
    });
});


app.put('/update/:eid', (req, res) => {
    const data = [req.body.ename, req.params.eid];
    con.query('UPDATE employee SET ename = ? WHERE eid = ?', data, (error, result) => {
        if (error) {
            res.send('Error in connecting API');
        } else {
            res.json(result); // Send result as JSON
        }
    });
});


app.delete("/:eid",(req,res)=>{
    con.query("delete from employee where eid="+req.params.eid,(error,result)=>{
    if(error)
    {
        res.send("error in connecting api")
    }
    else
    {
        res.send(req.params.eid)
    }
})

});

app.listen(12000, () => {
    console.log('Server is running on port 12000');
});





