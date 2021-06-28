// Построение треугольника в цикле
let str = ''
while (str.length < 7) {
	str += '#'
	console.log(str)
}

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
