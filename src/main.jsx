import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
// importación de estilos globales
import './styles.css';

// ReactDOM.render es el método que se encarga de renderizar el componente en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GifExpertApp />
	</React.StrictMode>
);
