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
    let bottom = false;

    function loadData() {
        fetch(
            `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=20&collection=${collectionName}`,
            options
        )
            .then((response) => response.json())
            .then((response) => setData(response.assets))
            .catch((err) => console.error(err));
        return <ProgressIndicator></ProgressIndicator>;
    }

    function handleScroll() {
        if (
            !bottom &&
            window.innerHeight + window.scrollY >= document.body.offsetHeight
        ) {
            console.log('bottom');
            bottom = true;
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <div className='App'>
            <Navbar></Navbar>
            {data.length === 0 ? null : <Hero piece={data[9]}></Hero>}
            {data.length === 0 ? (
                loadData()
            ) : (
                <PieceGrid pieces={data}></PieceGrid>
            )}
        </div>
    );
}

export default App;
