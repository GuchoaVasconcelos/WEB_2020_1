import React from 'react'


function Enemy(props){

    return(
        <div>
            <div>Name: {props.nameEnemy} </div>
            <img src={props.imgEnemy}></img>
        </div>
    )

}

export default Enemy;