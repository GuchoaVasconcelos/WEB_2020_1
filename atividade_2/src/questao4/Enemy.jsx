import React from 'react'


function Enemy(props) {

    return (
        <div>
            <div>Name: {props.nameEnemy} </div>
            <div>Lute comigo aqui na {props.arena}</div>
            <img src={props.imgEnemy}></img>
        </div>
    )

}

export default Enemy;