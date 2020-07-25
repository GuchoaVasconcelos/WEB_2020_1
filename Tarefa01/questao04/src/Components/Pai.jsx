import React from 'react'
import Filho from './Filho'


function Pai(props){
    return(
        <Filho name={props.name} course={props.course} city={props.city}></Filho>
    )
}

export {Pai};