const myArray = [
	{ a: 1, b: 2 },
	{ c: 3, d: 4 },
	{ e: 5, f: 6 } 
]

localStorage.setItem('myArray', JSON.stringify(myArray));


const convertDiceLocalStorage = localStorage.getItem('myArray')
const valueConverted = JSON.parse(convertDiceLocalStorage);

console.log(valueConverted);
