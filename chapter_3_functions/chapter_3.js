//minimum
function min(a, b) {
	return a < b ? a : b
}
console.log(min(6, 3))
//---solution---
// function min(a, b) {
// 	if (a < b) return a
// 	else return b
// }

//recursion
function isEven(num) {
	num = Math.abs(num)
	if (num === 0) return true
	else if (num === 1) return false
	else return isEven(num - 2)
}
console.log(isEven(-4))
//---solution---
// function isEven(n) {
// 	if (n == 0) return true
// 	else if (n == 1) return false
// 	else if (n < 0) return isEven(-n)
// 	else return isEven(n - 2)
// }

//count characters
function countBs(str) {
	return str.match(/B/g).length
}
function countChars(str, letter) {
	const reg = new RegExp(letter, 'g')
	return str.match(reg).length
}
console.log(countBs('bBdfB'))
console.log(countChars('bBdfB', 'B'))
//---solution---
// function countChar(string, ch) {
// 	let counted = 0
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] == ch) {
// 			counted += 1
// 		}
// 	}
// 	return counted
// }

// function countBs(string) {
// 	return countChar(string, 'B')
// }
