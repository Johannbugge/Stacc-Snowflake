import React from 'react';

import styles from './pieceCard.module.css';

const PieceCard = (props) => {
	return (
		<div className={styles.card}>
			<img className={styles.cardImg} src={props.piece.image_preview_url} alt={props.piece.description}></img>
			<p>{props.piece.name}</p>
			<p>{props.piece.description}</p>
			{props.piece.sell_orders ? (
				<p>{parseInt(props.piece.sell_orders[0].current_price) / 1000000000000000000} Ξ</p>
			) : null}
		</div>
	);
};

export default PieceCard;
