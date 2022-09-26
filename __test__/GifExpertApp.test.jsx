import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('prueba de GifExpertApp', () => {
	const inputValue = 'Elden Ring';
	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GifExpertApp />);
		expect(container).toMatchSnapshot();
	});

	test('debe probar si se agrega una categoría', () => {
		render(<GifExpertApp />);
		// probar onAddCategory
		// screen.debug();
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);
		// screen.debug();
		expect(screen.getByText(inputValue)).toBeTruthy();
	});

	test('debe que no mostrar categoría repetidas', () => {
		render(<GifExpertApp />);
		// screen.debug();
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		fireEvent.input(input, { target: { value: 'cyberpunk 2077' } });
		fireEvent.submit(form);
		screen.debug();
		// solo debe mostrar una vez la categoría
		expect(screen.getAllByText('cyberpunk 2077').length).toBe(1);
	});
});
