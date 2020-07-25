import React from 'react'


function Display(props) {
    return (
        <div>
            <h1>Nome: {props.name}</h1>
            <h1>Curso: {props.course}</h1>
            <h1>Cidade: {props.city}</h1>
        </div>
    )
}

export default Display;