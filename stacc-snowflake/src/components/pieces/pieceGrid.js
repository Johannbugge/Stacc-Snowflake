import React from 'react';
import PieceCard from './pieceCard';

import styles from './pieceGrid.module.css';

const PieceGrid = (props) => {
	console.log(props);
	return (
		<div className={styles.grid}>
			{props.pieces.map((piece) => {
				return <PieceCard piece={piece} key={piece.id}></PieceCard>;
			})}
		</div>
	);
};

export default PieceGrid;
