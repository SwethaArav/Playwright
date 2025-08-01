//Named function

function F1(x,y){
let z=(x+y)
return z
}
console.log(F1(2,2));

//Annonymous function

let F2= function() {
    console.log("Annonymous Function");   
}
F2()

//Arrow function

let F3 = () => {
    console.log("Arrow Function");
}
F3()

//Single line arrow function

let F4 = (x,y) => x*y;
setTimeout(() => {
    console.log("Single Arrow function");
    console.log(F4(2,3));
}, 2000);
//console.log(F4(2,3));

//Callback Function

function userName(Firstname, Lastname, Middlename) {
    console.log("User's first name is "+ Firstname);
    
    fatherName(Lastname)
    motherName(Middlename)
}

function fatherName(name) {
    console.log("User's father name is " + name);
    
}

function motherName(name) {
    console.log("User's mother name is " + name);
    
}
userName("Swetha", "Siva", "Vasugi")

