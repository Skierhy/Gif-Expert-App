import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas de GifItem', () => {
	const title = 'Holaa';
	const url = 'https://';
	test('Prueba de snapshots', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe que mostrar la imagen con el url y el alt indicado', () => {
		render(<GifItem title={title} url={url} />);
		// screen.debug();
		const { alt, src } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Debe que mostrar el titulo mostrado en un párrafo', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
		expect(screen.getByText(title).innerHTML).toBe(title);
	});
});
