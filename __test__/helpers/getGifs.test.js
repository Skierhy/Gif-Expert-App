import { getGifs } from '../../src/helpers/getGifs';
describe('Prueba getGifs()', () => {
	test('Debe que retornar un arreglo de gifs', async () => {
		const prueba = await getGifs('cyberpunk');
		console.log(prueba);
		// toBeGreaterThan es para que sea mayor a 0
		expect(prueba.length).toBeGreaterThan(0);
		/* Está verificando que el primer elemento de la matriz sea un objeto con las propiedades id,
        title y url. */
		expect(prueba[0]).toEqual({
			// expect.any es para que sea de cualquier string
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
