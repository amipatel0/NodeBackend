const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>HomePage</h1><a href="/contact">Go to Contact page</a>');
});

app.get('/contact', (req, res) => {
    res.send('<h2>Contact US Page</h2>');
});

app.post('/info', (req, res) => {
    res.json([
        {
            id: 'S01',
            name: 'Ami Patel',
            sem: '6'
        },
        {
            id: 'S02',
            name: 'Avni Patel',
            sem: '5'
        },
        {
            id: 'S03',
            name: 'Kesha Patel',
            sem: '3'
        },
        {
            id: 'S04',
            name: 'Kinjal Shah',
            sem: '1'
        }
    ]);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


// const express=require('express')
// const app=express();

// app.get('/',(req,res)=>{
//     res.send('<h1>HomePage</h1><a href="/contact"/>Go to Contact page</a>');

// });
// app.get('/contact/',(req,res)=>{
//     res.send(`<h2>Contact US Page </h2>`);
// });


// app.post('/info',(req,res)=>{
//     res.send([
//         {
//             id:'s01',
//             name:'Ami Patel',
//             sem:'6'
//         },
//         {
//             id:'s02',
//             name:'Avni Patel',
//             sem:'5'
//         },
//         {
//             id:'s03',
//             name:'Kesha Patel',
//             sem:'3'
//         },
//         {
//             id:'s04',
//             name:'Kinjal Shah',
//             sem:'1'
//         }
//     ]);
//     });


// app.listen(5000);