//var scoping

/* if(true){
    var z=50;
    console.log(z);    
}
console.log(z); */ 

//let scoping
/* if(true){
    let z=50;
    console.log(z);    
} */

//const scoping
/*  if(true){
    const z=50;
    console.log(z);
}  */

var genderType = "male"; // global declaration


function printGender(){


let color="brown" //function scope


if(genderType.startsWith("female")){
    var age=30;
    let color ="pink"
    console.log("She/her favourite colour"+color);
}else{
    var age=35;
    console.log("He/him:"+color);
}
console.log(age);
}


printGender()
console.log(genderType);