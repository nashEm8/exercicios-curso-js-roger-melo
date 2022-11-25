const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

const testUsername = username => /^[a-zA-z]{6,12}$/.test(username);

form.addEventListener('submit', event => {
	event.preventDefault();

	const isAvalidUsername = testUsername(event.target.username.value);

	if(isAvalidUsername){
		feedback.textContent = 'Usuário válido :)';
		return;
	}

	feedback.textContent = 'O nome de usuário deve conter de 6 à 12 caracteres e deve ser apenas letras!';
});

form.username.addEventListener('keyup', event => {
	const isAvalidUsername = testUsername(event.target.value);

	if(isAvalidUsername){
		form.username.setAttribute('class', 'success');
		return;
	}

	form.username.setAttribute('class', 'error');

});