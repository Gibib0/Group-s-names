'use strict'

const arrGroup = [
	'FE2021-5',
	'Fe2020-2',
	'FD2021',
	'fD2022-1',
	'FE2020-3',
	'FD2020/2',
	'fe2021-3',
	'FD2020$5',
	'FE2008-52',
	'Fm2008-23',
	'FM2022-1',
]

function checkGroup(groupName) {
	const reg = /^(FD|FM|FE|fd|fm|fe)20\d{2}(-\d+)?$/

	if(reg.test(groupName)) {
		return `Success: ${groupName}`;
	}
	
	return `Error: ${groupName}`;
}

function validating(groupArr) {
	groupArr.forEach(group => {
		console.log(validating(group));
	})
}