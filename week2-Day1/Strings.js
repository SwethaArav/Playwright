


/* String Declaration 


1. String Literal
2. Object Literal*/



//String Literal - "",''.``


let firstName = "Ravindran";
let userName = "Ravindran"


//String Object // Heap Memory it gets stored in two different memory address


let firstName1 = new String("Ravindran");
let userName1 = new String("Ravindran");


//String Methods


//Escape Sequence


let testType = 'It\'s a regression testing'
console.log(testType)


let stringType="Hello, this is a \"double quote\""
console.log(stringType)


//concatenation -- concat()
//+


let testCaseName = "Create a new Lead"
let testCaseId = "123"


let result = testCaseId.toString().concat(testCaseName)
console.log(result);


//with +


let result1 = testCaseId+" - "+testCaseName+" passed in the last execution"
console.log(result1);


//Template literal = `${}`


let testcases=250;
let output = `There are ${testcases} testcases`
console.log(output);


//length




//length - starts with 1 - the length of courseName is 10
//index - starts with 0 - the index of "t" is 9


//console.log(`The length of the string is ${courseName.length}`);


//charAt()


//console.log(`The charAt of 2 of the string is ${courseName.charAt(2)}`);


//indexOf()


//console.log(`The indexOf of a ${courseName.indexOf('a')}`);



let courseName = "Playwright"
//index           0,1,2,3,4,5,6,7,8,9
//reverseindex    -10,-9,-8,-7,-6,-5,-4,-3,-2,-1


//slice()
let outputSlice1 = courseName.slice(2,4) //ay
console.log(outputSlice1);


let outputSlice2 = courseName.slice(-4,-2) // ig
console.log(outputSlice2);


let outputSlice3 = courseName.slice(-6) // wright
console.log(outputSlice3);


/* Note:
1. start index included and end index is not included also optional 
2. Negative index is allowed, The count starts from the -1*/


//substring


let outSubString1 = courseName.substring(3,5) // yw
console.log(outSubString1);


let outSubString2 = courseName.substring(5,3) // yw
console.log(outSubString2);


let outSubString3 = courseName.substring(5,-3) // Equilvaoent to "5,0" Playw // negative value is considered as "0"
console.log(outSubString3);


/* Note:


1, start index included and end index is not included also it is optional
2. Does not support neagtive index instead it treats as "0"
3. Swapping can be done between your start and end indices
*/





//String Reversal 


let companyName = "TestLeaf"
//output ="faeltset"