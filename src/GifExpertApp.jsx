import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	// useState es un hook que nos permite manejar el estado de un componente
	const [categories, setCategories] = useState(['cyberpunk 2077']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
		// setCategories((cat) => [...cat, category]);
	};
	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>
			{/* input */}
			<AddCategory onNewCategory={(event) => onAddCategory(event)} />
			{/* lista de Gif */}
			{categories.map((category) => (
				// key es un atributo especial de react que nos ayuda a identificar cada elemento de la lista
				<GifGrid key={category} category={category} />
			))}
			{/* Gif Item */}
		</>
	);
};
