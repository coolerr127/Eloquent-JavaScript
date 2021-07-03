// Построение треугольника в цикле
let str = ''
while (str.length < 7) {
	str += '#'
	console.log(str)
}
//---solution---
//for (let line = '#'; line.length < 8; line += '#') console.log(line)

//FizzBuzz
for (let i = 1; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz')
		continue
	} else if (i % 3 === 0) {
		console.log('Fizz')
		continue
	} else if (i % 5 === 0) {
		console.log('Buzz')
		continue
	} else {
		console.log(i)
	}
}
//---solution---
// for (let n = 1; n <= 100; n++) {
// 	let output = ''
// 	if (n % 3 == 0) output += 'Fizz'
// 	if (n % 5 == 0) output += 'Buzz'
// 	console.log(output || n)
// }

// Шахматная доска
const size = 10
let hash = true
let test = false
let str = ''
for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
		if (j === 0) {
			str += '\n'
			if (test) {
				str += ' '
				test = !test
			} else {
				test = !test
			}
		}
		if (hash) {
			str += '#'
			hash = !hash
		} else if (!hash) {
			str += ' '
			hash = !hash
		}
	}
}
console.log(str)
//---solution---
// let size = 8

// let board = ''

// for (let y = 0; y < size; y++) {
// 	for (let x = 0; x < size; x++) {
// 		if ((x + y) % 2 == 0) {
// 			board += ' '
// 		} else {
// 			board += '#'
// 		}
// 	}
// 	board += '\n'
// }

// console.log(board)
