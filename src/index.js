// function min(arr=[]) {
// 	Let minNumber = arr[0]
	

// 	for(let i=1; arr[i] < arr.length; i++) 
// 	{
// 		if(arr[i] < minNumber)
// 		// if(arr[i] > maxNumber)
// 		minNumber = arr[i]
// 	}
// 	return minNumber

// }
// function sum (...args) {
// 	let sumNum = 0;
// 	let arrNum = [];



function isNumber (value) {
	return typeof value === 'number';
}

function getLessValue (previousValue, currentValue) {
	return previousValue < currentValue ? previousValue : currentValue;
}

function getBiggestValue (previousValue, currentValue) {
	return previousValue > currentValue ? previousValue : currentValue;
}

function getSum (previousValue, currentValue) {
	return previousValue + currentValue;
}

export function min (arrNumbers = []) {
	return arrNumbers
		.filter(isNumber)
		.reduce(getLessValue, undefined);
}

export function max (arrNumbers = []) {
	return arrNumbers
		.filter(isNumber)
		.reduce(getBiggestValue, undefined);
}

export function sum (...arrNumbers) {
	return arrNumbers
		.filter(isNumber)
		.reduce(getSum, 0);
}