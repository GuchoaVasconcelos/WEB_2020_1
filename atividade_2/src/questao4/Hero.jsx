import React from 'react'


function Hero(props) {

    return (
        <div>
            <div>Name: {props.nameHero} </div>
            <div>Lute comigo aqui na {props.arena}</div>
            <img src={props.imgHero}></img>
        </div>
    )

}

export default Hero;