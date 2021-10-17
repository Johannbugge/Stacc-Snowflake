import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import PieceGrid from './components/pieces/pieceGrid';
import Hero from './components/hero';
import ProgressIndicator from './components/progressIndicator';

function App() {
	const [data, setData] = useState([]);
	const [hasMoreData, setHasMoreData] = useState(true);
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(false);
	const limit = 20;
	const options = { method: 'GET' };
	const collectionName = 'xenogems';

	function handleScroll() {
		const bottom = window.scrollY + window.innerHeight === document.body.scrollHeight;
		if (!loading && hasMoreData && bottom) {
			console.log('Bottom!');
			setLoading(true);
			loadData();
		}
	}

	function loadData() {
		fetch(
			`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=${limit}&collection=${collectionName}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				setData([...data, ...response.assets]);
				setOffset(offset + limit);
				setLoading(false);
				if (response.assets.length < limit) setHasMoreData(false);
			})
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div className='App'>
			<Navbar></Navbar>
			{data.length === 0 ? null : <Hero piece={data[9]}></Hero>}
			{data.length === 0 ? loadData() : <PieceGrid pieces={data}></PieceGrid>}
			{loading ? <ProgressIndicator></ProgressIndicator> : null}
		</div>
	);
}

export default App;
