import React, { Component } from 'react';


export default class Filho extends Component {
    render() {
        return (
            <div>
                <h1>Nome: {this.props.name}</h1>
                <h1>Curso: {this.props.course}</h1>
                <h1>Cidade: {this.props.city}</h1>
            </div>
        )
    }
}

export {Filho};