/* Strict Equality "==="
1. Compare datatype and
2. Compare the value */
 
/* Non strict equality//loose equality "=="
Compare the value not the datatype */



console.log(1===1);//true
console.log(1==="1");//false strict equality
console.log("chrome"==="Chrome");//false
console.log(1=="1");//true because in loose equality your data typesgets converted
console.log(1==true);//true because in javascript loose equality your boolean to nummber true-->1
console.log(1===true);//false//here the boolean is not getting converted
console.log(true=="true");//false

let x=10;
x+=5;
console.log(x);

x-=5
console.log(x);

x*=5
console.log(x);

console.log(x++);
console.log(x);

console.log(++x);

console.log(x--);
console.log(x);

console.log(--x);



