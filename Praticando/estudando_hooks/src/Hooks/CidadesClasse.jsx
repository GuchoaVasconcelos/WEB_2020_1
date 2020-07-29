import React, { Component } from 'react';

let cidadesStr = ['Fortaleza', 'Quixadá', 'Limoeiro', 'Juazeiro'];

export default class CidadesClasse extends Component {

    constructor(props) {
        super(props);
        this.state = { fort: 0, qui: 0, lim: 0, jua: 0, maior: 0, menor: 0 }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fort !== this.state.fort ||
            prevState.qui !== this.state.qui ||
            prevState.jua !== this.state.jua ||
            prevState.lim !== this.state.lim) {
            let cidades = [this.state.fort, this.state.qui, this.state.lim, this.state.jua];
            let localMaior = this.state.maior;

            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] > localMaior) {
                    localMaior = cidades[i];
                }
            }
            let localMenor = localMaior;
            this.setState({ maior: localMaior });
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] < localMenor) {
                    localMenor = cidades[i];
                }
            }
            this.setState({ menor: localMenor });
        }

    }

    maisVotada() {
        let saida = '';
        let cidades = [this.state.fort, this.state.qui, this.state.lim, this.state.jua];
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] === this.state.maior) {
                saida += cidadesStr[i] + '';
            }
        }
        return saida;
    }

    menosVotada() {
        let saida = '';
        let cidades = [this.state.fort, this.state.qui, this.state.lim, this.state.jua];
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] === this.state.menor) {
                saida += cidadesStr[i] + '';
            }
        }
        return saida;
    }

    render() {
        return (
            <div>
                <h1>Maior: {this.state.maior} : {this.maisVotada()} </h1>
                <h1>Menor: {this.state.menor} : {this.menosVotada()}</h1>
                <h2>Fortaleza: {this.state.fort}</h2>
                <h2>Quixadá: {this.state.qui}</h2>
                <h2>Limoeiro: {this.state.lim}</h2>
                <h2>Juazeiro: {this.state.jua}</h2>

                <button onClick={() => this.setState({ fort: this.state.fort + 1 })}>Vote em Fortaleza</button>
                <button onClick={() => this.setState({ qui: this.state.qui + 1 })}>Vote em Quixadá</button>
                <button onClick={() => this.setState({ jua: this.state.jua + 1 })}>Vote em Limoeiro</button>
                <button onClick={() => this.setState({ lim: this.state.lim + 1 })}>Vote em Juazeiro</button>

            </div>
        )
    }
}