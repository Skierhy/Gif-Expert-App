import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Prueba de hook useFetchGifs', () => {
	test('debe de regresar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('cyberpunk 2077'));
		const { images, isLoading } = result.current;
		console.log(images, isLoading);
		// const {images, isLoading}=useFetchGifs();
		expect(images).toEqual([]);
		expect(images.length).toBe(0);
		expect(isLoading).toBe(true);
	});

	test('debe de regresar un arreglo de imágenes y isLoading en false', async () => {
		const { result } = renderHook(() => useFetchGifs('cyberpunk 2077'));
		await waitFor(() => {
			// lo que hace es esperar hasta que el resultado sea mayor a 0
			expect(result.current.images.length).toBeGreaterThan(0);
		});
		const { images, isLoading } = result.current;
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
