import s from './hero.module.css';

function Hero(props) {
    console.log(props);
    return (
        <div className={s.hero}>
            <div className={s.first}>
                <h1 className={s.font}>{props.piece.collection.name}</h1>
                <h2 className={s.font}>
                    This collection was created by{' '}
                    {props.piece.creator.user.username}
                </h2>
                <button
                    onclick='https://opensea.io/collection/xenogems'
                    className={s.button}
                >
                    Explore
                </button>
            </div>
            <img className={s.image} src={props.piece.image_url}></img>
        </div>
    );
}

export default Hero;
