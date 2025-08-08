//occurence

/* Find the number of occurrences.
Given the array, const nums = [2,4,5,2,1,2];
if const k = 2, then output >> 3 */

const nums = [2,4,5,2,1,2];
const k = 2;

let count = 0;

for (let index = 0; index < nums.length; index++) {
    if (nums[index] === k){
        count ++;
    }
    
}
console.log(count);
