const listFilms = document.querySelector('.list');

const diceFilms = async () => {
	const response = await fetch('https://api.b7web.com.br/cinema/');
	const films = await response.json()

	console.log(films);

	films.forEach(film => {
		listFilms.innerHTML += `
			<li>
				<h4>${film.titulo}</h4>
				<img src = "${film.avatar}"> 
			</li>
		`
	})

}	

diceFilms();