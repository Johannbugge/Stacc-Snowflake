import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import PieceGrid from './components/pieces/pieceGrid';
import Hero from './components/hero';
import ProgressIndicator from './components/progressIndicator';
import About from './components/about';

function App() {
    const [data, setData] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);
    const limit = 40;
    const options = { method: 'GET' };
    const collectionName = 'xenogems';

    function handleScroll() {
        const bottom =
            window.scrollY + window.innerHeight === document.body.scrollHeight;
        if (!loading && hasMoreData && bottom) {
            console.log('Bottom!');
            setLoading(true);
            loadData();
        }
    }

    const [visible, setVisible] = useState(false);
    function handleVisible() {
        setVisible(!visible);
    }

    function loadData() {
        fetch(
            `https://api.opensea.io/api/v1/assets?order_direction=asc&offset=${offset}&limit=${limit}&collection=${collectionName}`,
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
            {visible ? <About handleVisible={handleVisible}></About> : null}
            <Navbar handleVisibleAbout={handleVisible}></Navbar>
            {data.length === 0 ? loadData() : <Hero piece={data[38]}></Hero>}
            {data.length === 0 ? null : <PieceGrid pieces={data}></PieceGrid>}
            {loading ? <ProgressIndicator></ProgressIndicator> : null}
        </div>
    );
}

export default App;
