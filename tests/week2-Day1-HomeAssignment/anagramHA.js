//isanagram

function isAnagram(str1, str2) {
    let normalStr1 = str1.replace(/\s+/g, '').toLowerCase()
    let normalStr2 = str2.replace(/\s+/g, '').toLowerCase()

    let sortStr1 = normalStr1.split('').sort().join('')
    let sortStr2 = normalStr2.split('').sort().join('')

    return sortStr1 === sortStr2
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));

