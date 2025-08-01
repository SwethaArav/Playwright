//string reverse

function stringReverse() {
    let companyName = "TestLeaf"
    let reverseCompanyName= companyName.split("").reverse().join("");
    return reverseCompanyName;
}
console.log(stringReverse());

let fname = "Swetha"
let reverse="";
for (let i = fname.length-1;i>=0; i--) {
    reverse=reverse+fname.charAt(i);
    
}
console.log(reverse);
