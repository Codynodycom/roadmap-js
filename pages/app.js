function setText(state) {
	const title = document.getElementById('title-page');
	if (state === 'ru') {
		title.style.fontSize = '12px';
		title.innerText = 'Сосредоточить сердце и направить волю';
	}
	else if (state === 'ch') {
		title.style.fontSize = '20px';
		title.innerText = '專 心 致 志';
	}
};
