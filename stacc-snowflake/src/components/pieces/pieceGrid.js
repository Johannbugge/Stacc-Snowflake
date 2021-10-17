import React from 'react';
import PieceCard from './pieceCard';

import styles from './pieceGrid.module.css';

const PieceGrid = (props) => {
	return (
		<div className={styles.grid}>
			{props.pieces.map((piece, index) => {
				return <PieceCard piece={piece} key={index}></PieceCard>;
			})}
		</div>
	);
};

export default PieceGrid;
