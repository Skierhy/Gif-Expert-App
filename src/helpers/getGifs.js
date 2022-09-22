export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=xVKlhgHvzrm3iEhYqHmAMdLwDfazGcqZ&q=${category}&limit=10`;
	const respuesta = await fetch(url);
	const { data } = await respuesta.json();
	/* Mapear los datos de la API y devolver un objeto con la identificación, el título y la URL de la
    imagen. */
	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.downsized_medium.url,
	}));
	return gifs;
};
