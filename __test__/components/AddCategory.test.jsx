import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba de AddCategory', () => {
	test('debe de cambiar el valor de la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		// screen.debug();
		const input = screen.getByRole('textbox');
		/* Simulando al usuario escribiendo en la entrada. */
		// .input sintaxis de testing-library
		// .input lo usamos para que automáticamente dispare el evento onChange
		// argumento 1: el elemento que queremos simular
		// argumento 2: el valor que queremos simular
		fireEvent.input(input, { target: { value: 'Hola Mundo' } });
		expect(input.value).toBe('Hola Mundo');
		screen.debug();
	});

	test('debe que llamar onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Hola Mundo';
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);
		expect(input.value).toBe('');

		// onNewCategory debe ser llamado una vez
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		// onNewCategory es llamada
		expect(onNewCategory).toHaveBeenCalled();
		// onNewCategory es llamada con el argumento inputValue
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('no debe de llamar onNewCategory si el input esta vació', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole('form');
		fireEvent.submit(form);
		expect(onNewCategory).not.toHaveBeenCalledWith();
	});
});
