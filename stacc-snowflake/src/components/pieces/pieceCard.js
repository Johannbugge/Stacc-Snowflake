import React from 'react';

import styles from './pieceCard.module.css';

const PieceCard = (props) => {
	function setFavorite() {
		props.handleSetFavorite(props.piece.token_id);
	}

	return (
		<div>
			<button className={props.favorite ? styles.fav : styles.notfav} onClick={setFavorite}></button>
			<div className={styles.card}>
				<img className={styles.cardImg} src={props.piece.image_preview_url} alt={props.piece.description}></img>
				<div className={styles.info}>
					<p className={styles.name}>{props.piece.name}</p>
					<p className={styles.desc}>{props.piece.description ? props.piece.description : 'Description'}</p>
				</div>
				<p className={styles.price}>
					{props.piece.sell_orders ? parseInt(props.piece.sell_orders[0].current_price) / 1000000000000000000 : '0.0'} Ξ
				</p>
			</div>
		</div>
	);
};

export default PieceCard;
