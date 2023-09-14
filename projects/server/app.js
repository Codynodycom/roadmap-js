// const delay = (time = 1000) => {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, time)
// 	});
// 	return promise;
// };
//
// delay(2500).then((data) => {
// 	console.log('the end');
// 	return function () {
// 		"Start"
// 	};
// })
//  .then((data) => {
// 	 console.log(data)
//  })

// const getData = () => new Promise((resolve) =>
// resolve([1,2,3,4,5]))
// const data = getData()
// console.log(data)
//
// async function Exmpl() {
// 	try {
// 		const data = await getData()
// 		console.log(data)
// 	} catch (err) {
// 		console.log(err)
// 	} finally {
// 		console.log('Finally')
// 	}
// }
//
// Exmpl()

const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = [];

filter.addEventListener('input', (event) => {
	const value = event.target.value.toLowerCase()
	const filteredUsers = USERS.filter((user) =>
		user.name.toLowerCase().includes(value)
	);
	render(filteredUsers);
})

async function start() {
	list.innerHTML = 'Loading...';
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await response.json();
		list.style.color = 'black';
		setTimeout(() => {
			USERS = data;
			render(data);
		}, 1000)
	} catch (err) {
		console.log(-1 + err);
		list.style.color = 'red';
		list.innerHTML = `~ ${err}`;
	}
}

function render(users=[]) {
	if (users.length === 0) {
		list.innerHTML = 'Пользователь не найден';
	} else {
		const html = users.map(toHTML).join('')
		list.innerHTML = html;
	}
}

function toHTML(user) {
	return `
		<li class="list-group-item">${user.name}</li>
	`
}

start()


