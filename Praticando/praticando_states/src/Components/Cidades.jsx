import React, { Component } from 'react'

export default class Cidades extends Component {
    state = { fortaleza:0, quixada:0, jericoacoara:0, limoeiro:0}
    
    votaFor = () => {
        this.setState({ fortaleza: this.state.fortaleza+1});
    }

    votaQui = () => {
        this.setState({ quixada: this.state.quixada+1});
    }

    votaJeri = () => {
        this.setState({ jericoacoara: this.state.jericoacoara+1});
    }

    votaLim = () => {
        this.setState({ limoeiro: this.state.limoeiro+1});
    }

    render() {
        return (
            <div>
                <h1>Fortaleza: {this.state.fortaleza}</h1>
                <h1>Quixadá: {this.state.quixada}</h1>
                <h1>Jericoacoara: {this.state.jericoacoara} </h1>
                <h1>Limoeiro: {this.state.limoeiro}</h1>

                <button onClick={this.votaFor}>Vote Fortaleza</button>
                <button onClick={this.votaQui}>Vote Quixadá</button>
                <button onClick={this.votaJeri}>Vote Jericoacoara</button>
                <button onClick={this.votaLim}>Vote Limoeiro</button>
            </div>
        )
    }

}

export {Cidades}
