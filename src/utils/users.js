const users = [
	{ username: 'User', password: '54321' },
	{ username: 'Tester', password: 'qwerty' },
	{ username: 'Admin', password: '12345' }
];

const getUserFromDB = user => {
	return users.find(item => (
		user.username === item.username && user.password === item.password
	));
};

const setUserLocally = user => {
	localStorage.setItem('user', JSON.stringify(user));
};

const getUserLocally = () => {
	return JSON.parse(localStorage.getItem('user'));
};

const removeUserLocally = () => {
	localStorage.removeItem('user');
}

export {
	getUserFromDB,
	setUserLocally,
	getUserLocally,
	removeUserLocally
};