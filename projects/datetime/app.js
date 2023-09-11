let currentType = 'full';

const getFormatingData = (data) => {
	return data.toString().length === 1 ? `0${data}` : data;
};

function getDateTime() {
	const dateTime = new Date();
	let tHH = getFormatingData(dateTime.getHours());
	let tMM = getFormatingData(dateTime.getMinutes());
	let tSS = getFormatingData(dateTime.getSeconds());
	let YY = dateTime.getFullYear();
	let MM = getFormatingData(dateTime.getMonth());
	let DD = getFormatingData(dateTime.getDay());
	let dateTimeData;
	switch (currentType) {
		case 'full':
			dateTimeData = `${DD}/${MM}/${YY} - ${tHH}:${tMM}:${tSS}`;
			break;
		case 'date':
			dateTimeData = `${DD}/${MM}/${YY}`;
			break;
		case 'time':
			dateTimeData = `${tHH}:${tMM}:${tSS}`;
			break;
		default:
			dateTimeData = 'Что-то пошло не так...';
			break;
	};
	return dateTimeData;
};

const btnFull = document.getElementById('full-btn');
const btnDate = document.getElementById('date-btn');
const btnTime = document.getElementById('time-btn');

btnFull.onclick = function() {
	currentType = 'full';
};
btnDate.onclick = function() {
	currentType = 'date';
};
btnTime.onclick = function() {
	currentType = 'time';
};

document.getElementById('output').innerText = getDateTime();

const time = setInterval(function() {
	document.getElementById('output')
	 .innerText = getDateTime();
}, 1000);
