import React from 'react';

import styles from './pieceCard.module.css';

const PieceCard = (props) => {
    return (
        <div>
            <button className={styles.fav}></button>
            <div className={styles.card}>
                <img
                    className={styles.cardImg}
                    src={props.piece.image_preview_url}
                    alt={props.piece.description}
                ></img>
                <p className={styles.name}>{props.piece.name}</p>
                <p className={styles.desc}>{props.piece.description}</p>
                {props.piece.sell_orders ? (
                    <p>
                        {parseInt(props.piece.sell_orders[0].current_price) /
                            1000000000000000000}{' '}
                        Ξ
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default PieceCard;
