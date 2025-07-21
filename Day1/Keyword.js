//var- redeclaration and reassignment is allowed so this is not in use
var userName='Swetha'
var userName='Arav'
userName='SweArav'

console.log(userName);

//let redeclaration not allowed only reassignment is allowed
let accBalance1=20000;
let accBalance2=3000;
accBalance1=50000;
console.log(accBalance1);

//Const no redeclaration or reassignment is allowed because it is used only for final or not changeable values
const accNum=9876789789
console.log(accNum);


