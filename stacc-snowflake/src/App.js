import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import PieceGrid from './components/pieces/pieceGrid';
import Hero from './components/hero';

function App() {
	const [data, setData] = useState(null);
	const options = { method: 'GET' };
	const collectionName = 'xenogems';

	if (data === null) {
		fetch(
			`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&collection=${collectionName}`,
			options
		)
			.then((response) => response.json())
			.then((response) => setData(response))
			.catch((err) => console.error(err));
		return null;
	} else {
		console.log(data);
		return (
			<div className='App'>
				<Navbar></Navbar>
				<Hero></Hero>
				<PieceGrid pieces={data.assets}></PieceGrid>
			</div>
		);
	}
}

export default App;
