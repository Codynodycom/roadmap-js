function setText(state) {
	const title = document.getElementById('title-page');
	
	if (state === 'en')
		title.innerText = 'Youjin Tyan';
	else if (state === 'ch')
		title.innerText = '田 友 金';
};
