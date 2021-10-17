import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import PieceGrid from './components/pieces/pieceGrid';
import Hero from './components/hero';
import ProgressIndicator from './components/progressIndicator';

function App() {
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const options = { method: 'GET' };
	const collectionName = 'xenogems';

	function loadData() {
		fetch(
			`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=50&collection=${collectionName}`,
			options
		)
			.then((response) => response.json())
			.then((response) => setData(response.assets))
			.catch((err) => console.error(err));
		return <ProgressIndicator></ProgressIndicator>;
	}

	return (
		<div className='App'>
			<Navbar></Navbar>
			<Hero></Hero>
			{data.length === 0 ? loadData() : <PieceGrid pieces={data}></PieceGrid>}
		</div>
	);
}

export default App;
