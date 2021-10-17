import React, { useState } from 'react';
import PieceCard from './pieceCard';

import styles from './pieceGrid.module.css';

const PieceGrid = (props) => {
	// Array of token_id's (Strings)
	const [favorites, setFavorites] = useState(getStoredFavorites());

	function getStoredFavorites() {
		return window.localStorage.getItem('favorites')?.split(',') ?? [];
	}

	function handleSetFavorite(token_id) {
		setFavorites((prevState) => {
			const newState = [...prevState];

			// Check if index already in array...
			const indexOfToken_id = prevState.indexOf(token_id);
			// ... if it is not, add token_id to state...
			if (indexOfToken_id === -1) {
				newState.push(token_id);
			} else {
				// ... else, if it is, delete...
				newState.splice(indexOfToken_id, 1);
			}

			// ... and update storage (remove item if length === 0, if not localStorage stores the key with value ''(empty string))
			newState.length > 0
				? window.localStorage.setItem('favorites', newState)
				: window.localStorage.removeItem('favorites');
			return newState;
		});
	}

	return (
		<div className={styles.grid}>
			{props.pieces.map((piece, index) => {
				return (
					<PieceCard
						piece={piece}
						key={index}
						favorite={favorites.includes(piece.token_id)}
						handleSetFavorite={handleSetFavorite}
					></PieceCard>
				);
			})}
		</div>
	);
};

export default PieceGrid;
