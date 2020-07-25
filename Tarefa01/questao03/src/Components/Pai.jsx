import React from 'react'
import Display from './Filho'

function Aluno(props) {
    return (
        <div>
            <Display name={props.name} course={props.course} city={props.city}></Display>
        </div>
    )
}

export default Aluno;