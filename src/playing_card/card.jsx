import Style from './Card.module.css'
import { useState } from 'react';

function FlipCard({ suit, value }) {
    const [show, setShow] = useState(false)

    return (
        <div className={Style.card} onClick={() => setShow(!show)}>
            {show ? (
                <div className={Style.back}>🂠</div>
            ) : (
                <>
                    <div className={Style.left}>{suit} {value}</div>
                    <div className={Style.middle}>
                        <div>{suit}</div>
                        <div>{value}</div>
                    </div>
                    <div className={Style.right}>{suit} {value}</div>
                </>
            )}
        </div>
    )
}

function Card(){
    return(
      <main className={Style.playingCards}>
        <FlipCard suit="♠" value="A" />
        <FlipCard suit="♥" value="K" />
        <FlipCard suit="♦" value="Q" />
        <FlipCard suit="♦" value="Q" />
      </main>
    );
}

export default Card;
