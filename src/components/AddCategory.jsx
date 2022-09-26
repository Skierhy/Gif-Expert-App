import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 0) {
			return;
		}
		// setCategories((categories) => {
		// 	return [inputValue, ...categories];
		// });
		onNewCategory(inputValue);
		setInputValue('');
	};

	return (
		<form onSubmit={(event) => onSubmit(event)} aria-label="form">
			<input
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};
