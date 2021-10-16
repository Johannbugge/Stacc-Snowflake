import './App.css';

function App() {
	const options = { method: 'GET' };
	const data = fetch(
		'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&collection=xenogems',
		options
	)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));

	return <div className='App'></div>;
}

export default App;
