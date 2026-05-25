import { useState } from 'react'
import style from './Card.module.css'
import profilePic from '../assets/Picture.jpg'

function Card(){
    const name = "Jay"
    const [show, setShow] = useState(false)

    return(
       <div className={style.cardBox}>
         <img className={style.img} alt="profile picture" src={profilePic}></img>
         <h1 className={style.name}>{name}</h1>
         <p>Learning something new</p>
         <button className={style.btn} onClick={() => setShow(!show)}>Click Me!</button>
         {show ? <h1>HELLO {name.toUpperCase()}</h1> : null}
        </div>
    );
}

export default Card
