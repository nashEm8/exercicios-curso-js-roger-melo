const listFilms = document.querySelector('.list');

const diceFilms = async () => {
	try{
	const response = await fetch('https://api.b7web.com.br/cinema/');
	const films = await response.json();

	console.log(films);

	films.forEach(film => {
		listFilms.innerHTML += `
			<li>
				<h4>${film.titulo}</h4>
				<img src = "${film.avatar}"> 
				<div class="options">
					<button>Assistir</button>
					<a href="" onclick = "favorite()"><i class="fa-regular fa-heart"></i></a>
					<a href="" onclick = "favorite()"><i class="fa-regular fa-thumbs-up"></i></a>
					<a href="" onclick = "favorite()"><i class="fa-regular fa-thumbs-down"></i></a>
				</div>
			</li>
			`
		})
	} catch(error){
		alert(`Não foi possível exibir os dados, erro: ${error}`);
	}

}	

diceFilms();

//<i class="fa-solid fa-heart"></i>