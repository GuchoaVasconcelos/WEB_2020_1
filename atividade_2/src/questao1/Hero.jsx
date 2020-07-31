import React from 'react'


function Hero(props){

    return(
        <div>
            <div img={props.imgHero}>Name: {props.nameHero} </div>
            <img src="https://i.pinimg.com/originals/31/f8/d1/31f8d106e2be1b5bd8f085b0acaac559.jpg"></img>
        </div>
    )

}

export default Hero;