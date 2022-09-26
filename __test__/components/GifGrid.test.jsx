import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// lo que hace es hacer un mock del custom hook useFetchGifs
jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba de GifGrid', () => {
	const category1 = 'cyberpunk 2077';
	test('debe que mostrar el isLoading', () => {
		useFetchGifs.mockReturnValue({ images: [], isLoading: true });
		render(<GifGrid category={category1} />);
		const loading = screen.getByText('Cargando...');
		const category = screen.getByText('cyberpunk 2077');
		expect(loading).toBeTruthy();
		expect(category).toBeTruthy();
		screen.debug();
	});

	test('debe que mostrar los items cuando se cargan las imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
			{
				id: '123',
				url: 'https://localhost/cualquierv2/cosa2.jpg',
				title: 'Cualquier cosa v2',
			},
		];
		useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });
		render(<GifGrid category={category1} />);
		expect(screen.getAllByRole('img').length).toBe(gifs.length);
	});
});
