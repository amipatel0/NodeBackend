console.log('Hello I am Ami Patel')


let a=10;
let b=20;

console.log("Value of a is:"+a);
console.log("Addition:"+(a+b));

for (let i=0; i<5; i++)
    {
        console.log(i);
    }

    const fruits=[];
    fruits[0]="Apple";
    fruits[1]="Banana";
    fruits[2]="Orange";
    fruits[3]="Mango";
    fruits[4]="Grapes";
    console.log(fruits);

    
    let x = 0;
    do {
        console.log("Using Do-While loop:"+x);
        x++;
    } while(x <=8);

    

    let y = 5;
    while(y < 8){
    console.log("Using While loop:"+y);
    y++;
}

let array=[
    {
        "sid":"S01",
        "sname":"Ami Patel",
         "semester":"6"
    },
    {
        "sid":"S02",
        "sname":"Avni Patel",
         "semester":"5"
    }
];
console.log(array);

const fruit = ["Banana", "Orange", "Apple", "Mango"]; 
fruit.includes("Banana");
let fLen = fruit.length; 
let text="" ;
 for (let i = 0; i < fLen; i++)
     {
         text +="\n"+fruit[i] ; 
     }
 console.log("Array Elements:"+text);
 console.log("Length of Array:"+fLen);


 const n=[8,26,15,19,7,11];
 let res=n.filter((item)=>{
    return item>20; 
})   
console.log("Using filter function:"+res);

const arr = [8, 26, 15, 19, 7, 11];

const newArr = arr.map((item) => {
    console.log(item);
    return item; 
});

console.log('New Array with map function:', newArr); 

